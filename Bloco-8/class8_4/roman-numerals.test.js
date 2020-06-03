// O problema de hoje é o de converter números inteiros pra números romanos! 
// Nos primeiros dias dos números romanos, a sua notação era mais simples do que a que conhecemos hoje:

// 1 I 
// 5 V 
// 10 X 
// 50 L 
// 100 C 
// 500 D 
// 1000 M

// Backlog Ideias
// Testar negativo
// Testar 0 e Floats (criar funcao para verificar se o mod é 0)
// assert.throws(() => convertToRoman(10.5), /^Error: So aceitamos variaveis do tipo integer/)
// IV -> 4

// Números intermediários (entre 1 e 5, 5 e 10, etc) eram formados por simples adição: 
// por exemplo, a notação do número 4 era IIII. Assim sendo, a primeira parte do nosso problema é essa:
//  dado um número inteiro entre 0 e 3000, converta-o para a notação de números romanos antiga!

const convertToRoman = require('./roman-numerals')
const assert = require('assert')

// Testando se a function existe
assert.equal(typeof (convertToRoman), 'function');

// Testando exceções
assert.throws(() => convertToRoman('Pet3L'), /^Error: So aceitamos variaveis do tipo integer/)
assert.throws(() => convertToRoman('3'), /^Error: So aceitamos variaveis do tipo integer/)

// Testando 1 a 4
assert.equal(convertToRoman(1), 'I')
assert.equal(convertToRoman(2), 'II')
assert.equal(convertToRoman(3), 'III')
assert.equal(convertToRoman(4), 'IIII')

// Testando 5 a 9
assert.equal(convertToRoman(5), 'V')
assert.equal(convertToRoman(6), 'VI')
assert.equal(convertToRoman(7), 'VII')
assert.equal(convertToRoman(8), 'VIII')
assert.equal(convertToRoman(9), 'VIIII')

// Testando 10 a 15
assert.equal(convertToRoman(10), 'X')
assert.equal(convertToRoman(11), 'XI')
assert.equal(convertToRoman(12), 'XII')
assert.equal(convertToRoman(13), 'XIII')
assert.equal(convertToRoman(14), 'XIIII')
assert.equal(convertToRoman(15), 'XV')

// Testando 26 e 43 e 50 e 55 e 76
assert.equal(convertToRoman(26), 'XXVI')
assert.equal(convertToRoman(43), 'XXXXIII')

assert.equal(convertToRoman(50), 'L')
assert.equal(convertToRoman(55), 'LV')
assert.equal(convertToRoman(76), 'LXXVI')


// Testando 100 200 227
assert.equal(convertToRoman(100), 'C')
assert.equal(convertToRoman(200), 'CC')
assert.equal(convertToRoman(227), 'CCXXVII')

// Testando 500 e 576 e 981
assert.equal(convertToRoman(500), 'D')
assert.equal(convertToRoman(576), 'DLXXVI')
assert.equal(convertToRoman(981), 'DCCCCLXXXI')

// Testando Millin 2999 e 3000
assert.equal(convertToRoman(1000), 'M')
assert.equal(convertToRoman(2999), 'MMDCCCCLXXXXVIIII')
assert.equal(convertToRoman(3000), 'MMM')
