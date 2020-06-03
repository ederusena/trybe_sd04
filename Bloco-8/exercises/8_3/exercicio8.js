// 8. Teste se uma função foi definida
Copiar
const assert = require('assert');

function thereIs() {}

// implemente seus testes aqui
assert.strictEqual(typeof thereIs, 'function');