var name = "eslint-plugin-frontmatter2";
var version = "1.0.0";

// Import from module since import attributes not yet supported

const map = new Map();

/**
 * @see https://eslint.org/docs/latest/extend/custom-processors#custom-processor-specification
 */
const frontmatter = {
	meta: { name, version },
	processors: {
		'frontmatter': {
			meta: {
				// Must begin with 'eslint-'
				name: 'eslint-frontmatter',
				version,
			},

			/**
			 * Strips out frontmatter before linting
			 */
			preprocess(text, filename) {
				if (text.startsWith('---')) {
					// Trim out opening of frontmatter ('---\n')
					const trimmed = text.substring(4);
					// Find index of closing of frontmatter & add 4 for '---\n'
					const end = trimmed.search(/^---$/m) + 4;

					if (end > 3) {
						// Count number of newlines in frontmatter section
						const newlines = text.substring(0, end).match(/[\r\n]{1}/g);
						// Save number of newlines for `postprocess`
						map.set(filename, newlines.length + 1);
						return [{ text: trimmed.substring(end), filename }];
					} else {
						return [{ text, filename }];
					}
				} else {
					return [{ text, filename }];
				}
			},

			/**
			 * Adjust line numbers in errors to correct for stripped frontmatter
			 */
			postprocess(messages, filename) {
				if (map.has(filename)) {
					const offset = map.get(filename);
					return messages.flatMap(
						errs => errs.map(({ line, ...rest }) => ({ line: line + offset, ...rest}))
					);
				} else {
					return messages.flat();
				}
			},
			supportsAutofix: false,
		}
	}
};

export { frontmatter };
