
const mySum = require('./mySum');

test('Sum of values of a array', () => {
    expect(mySum([1, 2, 3, 4])).toBe(10);
});

test('Sum of values of a array', () => {
    expect(mySum([1, -2, -3, 4])).toBe(0);
});

// A função mySum(arr) recebe um array arr e retorna a soma de seus elementos
// Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
// Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado
