const num = 5;
//recursive
const factorial = n => n == 0 ? 1 : n * factorial(n - 1);

console.log(factorial(num));