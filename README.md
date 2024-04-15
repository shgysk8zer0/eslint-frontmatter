# eslint-plugin-frontmatter2

Plugin to allow YAML frontmatter to be ignored by ESLint

[![CodeQL](https://github.com/shgysk8zer0/eslint-frontmatter/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/shgysk8zer0/eslint-frontmatter/actions/workflows/codeql-analysis.yml)
![Node CI](https://github.com/shgysk8zer0/eslint-frontmatter/workflows/Node%20CI/badge.svg)
![Lint Code Base](https://github.com/shgysk8zer0/eslint-frontmatter/workflows/Lint%20Code%20Base/badge.svg)

[![GitHub license](https://img.shields.io/github/license/shgysk8zer0/eslint-frontmatter.svg)](https://github.com/shgysk8zer0/eslint-frontmatter/blob/master/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/shgysk8zer0/eslint-frontmatter.svg)](https://github.com/shgysk8zer0/eslint-frontmatter/commits/master)
[![GitHub release](https://img.shields.io/github/release/shgysk8zer0/eslint-frontmatter?logo=github)](https://github.com/shgysk8zer0/eslint-frontmatter/releases)
[![GitHub Sponsors](https://img.shields.io/github/sponsors/shgysk8zer0?logo=github)](https://github.com/sponsors/shgysk8zer0)

[![npm](https://img.shields.io/npm/v/eslint-plugin-frontmatter2)](https://www.npmjs.com/package/eslint-plugin-frontmatter2)
![node-current](https://img.shields.io/node/v/eslint-plugin-frontmatter2)
![npm bundle size gzipped](https://img.shields.io/bundlephobia/minzip/eslint-plugin-frontmatter2)
[![npm](https://img.shields.io/npm/dw/eslint-plugin-frontmatter2?logo=npm)](https://www.npmjs.com/package/eslint-plugin-frontmatter2)

[![GitHub followers](https://img.shields.io/github/followers/shgysk8zer0.svg?style=social)](https://github.com/shgysk8zer0)
![GitHub forks](https://img.shields.io/github/forks/shgysk8zer0/eslint-frontmatter.svg?style=social)
![GitHub stars](https://img.shields.io/github/stars/shgysk8zer0/eslint-frontmatter.svg?style=social)
[![Twitter Follow](https://img.shields.io/twitter/follow/shgysk8zer0.svg?style=social)](https://twitter.com/shgysk8zer0)

[![Donate using Liberapay](https://img.shields.io/liberapay/receives/shgysk8zer0.svg?logo=liberapay)](https://liberapay.com/shgysk8zer0/donate "Donate using Liberapay")
- - -

- [Code of Conduct](./.github/CODE_OF_CONDUCT.md)
- [Contributing](./.github/CONTRIBUTING.md)
<!-- - [Security Policy](./.github/SECURITY.md) -->

```js
---
foo: bar
number: 42
works: true
person:
  name: Chris
  age: 38
  developer: true
---

console.log('{{ foo }}');
console.log(JSON.parse('{{ person | jsonify }}'));
```

> [!IMPORTANT]
> This plugin does not enable Liquid templating support in JavaScript. For this
> reason, it is advised that you enclose all such variables in quotes and treat
> them as strings, eg. `foo('{{ bar }}')`. You may use `parseInt` or `JSON.parse`
> as necessary from there.

## Example Config File

```js
import frontmatter from 'eslint-plugin-frontmatter2';

export default {
  'plugins': {
    'frontmatter2': frontmatter
  },
  processor: 'frontmatter/frontmatter',
};
```
