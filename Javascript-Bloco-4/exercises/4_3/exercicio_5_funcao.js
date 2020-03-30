
function repeatInArray(array) {
  let mf = 1;
  let m = 0;
  let item;
  for (let i = 0; i < array.length; i++) { 
    for (let j = i; j < array.length; j++) {
      if (array[i] == array[j])
        m++;
      if (mf < m) {
        mf = m;
        item = array[i];
      }
    }
    m = 0;
  }
  console.log(`${item} ( ${mf} times ) `);
}

console.log(repeatInArray([2, 3, 2, 5, 8, 2, 3]))
