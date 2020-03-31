/* 5- Faça um programa que defina três variáveis com os valores dos 
três ângulos internos de um triângulo. 
Retorne true se os ângulos representarem os ângulos de um triângulo 
e false caso contrário. */

let pieceChess = 'King';
let upper = pieceChess.toUpperCase();

switch (upper) {
    case 'PAWN':
        console.log('PAWN moves Forward!');
        break;
    case 'ROOK':
        console.log('Rooks can move 1 to 7 squares forward, backward, left, or right');
        break;
    case 'KNIGHT':
        console.log('KNIGHT can move forward, backward, left or right two squares and must then move one square in either perpendicular direction.');
        break;
    case 'BISHOP':
        console.log('BISHOP Diagonal Movements');
        break;
    case 'QUEEN':
        console.log('QUEEN The queen can move in any direction on a straight or diagonal path.');
        break;
    case 'KING':
        console.log('KING The king piece can move one single square in any direction');
        break;
    default:
        break;
}