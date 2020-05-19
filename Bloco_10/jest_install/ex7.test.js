
const thereIs = require('./thereIs');

test('Teste se uma variável foi definida', () => {
    expect(thereIs()).toMatch("");
    expect(typeof (thereIs)).toBe('function');
});

test('type of a function not defined is undefined', () => {
    expect(typeof (thereIsnt)).toBe('undefined');
  });

const thereI = '';

test('type of a defined variable is not `undefined`', () => {
  expect(typeof (thereI)).not.toBe('undefined');
});

test('type of a variable not defined is undefined', () => {
  expect(typeof (thereIsnt)).toBe('undefined');
});
//Teste se uma variável foi definida