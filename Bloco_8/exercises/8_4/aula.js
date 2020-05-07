var stringArray = ['Blue', 'Humpback', 'Beluga'];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compararNumeros(a, b) {
  return a - b;
}

console.log('stringArray:', stringArray.join());
console.log('Ordenada:', stringArray.sort());

console.log('numberArray:', numberArray.join());
console.log('Ordenada sem função de comparação:', numberArray.sort());
console.log('Ordenada com compararNumeros:', numberArray.sort(compararNumeros));

console.log('numericStringArray:', numericStringArray.join());
console.log('Ordenada sem função de comparação:', numericStringArray.sort());
console.log('Ordenada com compararNumeros:', numericStringArray.sort(compararNumeros));

console.log('mixedNumericArray:', mixedNumericArray.join());
console.log('Ordenada sem função de comparação:', mixedNumericArray.sort());
console.log('Ordenada com compararNumeros:', mixedNumericArray.sort(compararNumeros));