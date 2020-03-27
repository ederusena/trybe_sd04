// 3- Faça um programa que retorne o maior de três números. 
// Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 4;
let b = 5;
let c = 3;
let maior = 0;

if (a > b) {
    maior = a;
}if (c > a) {
    maior = c;
} else {
    maior = b;
}
console.log(maior)
