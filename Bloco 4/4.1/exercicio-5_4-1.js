/* 5- Faça um programa que defina três variáveis com os valores dos 
três ângulos internos de um triângulo. 
Retorne true se os ângulos representarem os ângulos de um triângulo 
e false caso contrário. */

const side1 = 5; 
const side2 = 6; 
const side3 = 7; 
const perimeter = (side1 + side2 + side3)/2;
const area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
console.log(area);
