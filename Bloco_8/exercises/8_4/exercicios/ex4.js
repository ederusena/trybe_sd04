const assert = require('assert');
// escreva a função findTheNeedle para passar nos testes abaixo:
function findTheNeedle(array, words){
    let keys = -1;
    for (const key in array) {
            if (array[key] == words){
                keys = key;
            }
        }
        return Number(keys)
    }
//
let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);
