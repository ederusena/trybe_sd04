// Array.reduce
// O reduce é diferente das outras HOFs: ele possui um parâmetro a mais para a
// função que recebe como parâmetro. Esse parâmetro é chamado de acumulador, 
// comumente referido a como acc. E o que ele faz? Ele serve para acumular 
// dentro de si os resultados das funções. 
// Pense assim: para um array de cinco elementos, o reduce executará a função
// passada como parâmetro cinco vezes.
// Na primeira iteração, o acumulador estará vazio.
// Na segunda vez, ele conterá o retorno da primeira iteração.
// Na terceira vez, ele conterá o retorno da primeira e da segunda iteração.
// Olhe no exemplo abaixo:

// A função soma todos os valores de um array:
// Apenas com o for:Copiar
const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0; // A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!
for(let i = 0; i < numbers.length; i += 1){
  sumNumbers = sumNumbers + numbers[i];
}
console.log(sumNumbers); // 113
Com .reduce:Copiar
const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113