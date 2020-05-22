function logicalCalc(array, op){
    const operations = {
    AND: (a, b) => a && b,
    OR: (a, b) => a || b,
    XOR: (a, b) => a !== b,
  }
  
  const logicalCalc = (array, op) => array.reduce(operations[op])
  console.log(logicalCalc([true, true, true, false], "AND")

// console.log(logicalCalc([true, true, true, false], "AND"), false);
// console.log(logicalCalc([true, true, true, false], "OR"), true);
// console.log(logicalCalc([true, true, true, false], "XOR"), true);
// console.log(logicalCalc([true, true, false, false], "AND"), false);
// console.log(logicalCalc([true, true, false, false], "OR"), true);
// console.log(logicalCalc([true, true, false, false], "XOR"), false);
// console.log(logicalCalc([true, false, false, false], "AND"), false);
// console.log(logicalCalc([true, false, false, false], "OR"), true);
// console.log(logicalCalc([true, false, false, false], "XOR"), true);
// console.log(logicalCalc([true, true], "AND"), true);
// console.log(logicalCalc([true, true], "OR"), true);
// console.log(logicalCalc([true, true], "XOR"), false);
// console.log(logicalCalc([false, false], "AND"), false);