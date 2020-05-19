
const myFizzBuzz = require('./myFizzBuzz');

test('Faça uma chamada com um número divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
});

test('Faça uma chamada com um número divisível por 3', () => {
    expect(myFizzBuzz(3)).toEqual('fizz');
});

test('Faça uma chamada com um número divisível por 5', () => {
    expect(myFizzBuzz(5)).toEqual('buzz');
});

test('Faça uma chamada com um número que não é divisível por 3 ou 5', () => {
    expect(myFizzBuzz(1)).toEqual(1);
});

test('Faça uma chamada com um parâmetro que não é um número', () => {
    expect(myFizzBuzz('1')).toEqual(false);
});

// 6. A função myFizzBuzz(num)
//  recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5,
//  retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5,
//  retorna o próprio número caso não seja divísivel por 3 ou 5 e
//  retorna false caso num não seja um número

// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
