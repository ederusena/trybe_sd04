// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    let x = [];
    let arr = [];
    for (let index = 1; index <= n; index++) {
        arr.push(index);
    }
    arr.map(element => {
    if (element % 3 === 0 && element % 5 === 0){
        x.push(['fizzbuzz']);
    }else if(element % 5 === 0){
        x.push(['buzz']);
    }else if( element % 3 === 0){
        x.push(['fizz']);
    } else {
        x.push([Number(element)]);
    }
    });
    return x
}

console.log(fizzBuzz(15))
module.exports = fizzBuzz;
