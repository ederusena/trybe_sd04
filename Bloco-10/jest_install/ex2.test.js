
const myIndexOf = require('./myIndexOf');

test('Value of index array', () => {
    expect(myIndexOf([1, 2, 3, 4],3)).toEqual(2);
    expect(myIndexOf([1, 2, 3, 4],5)).toBe(-1);
});

// 2. A função myIndexOf(arr, item) recebe um array arr, um item e retorna o índice do item ou -1 caso o item não pertença ao array arr
//   1 = Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
//   2 = Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado
