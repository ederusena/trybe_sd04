const assert = require('assert');
// escreva a função wordLengths para passar nos testes abaixo:
function wordLengths(words){
    let arrLenght = []
    for (const key in words) {
        arrLenght.push(Object.values(words[key]).length);
    }
    return arrLenght;
}
//
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);