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
