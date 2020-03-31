
function repeatInArray(array) {
  let VezesRepetidas = 1;
  let m = 0;
  let item;
  for (let i = 0; i < array.length; i++) { 
    for (let j = i; j < array.length; j++) {
      if (array[i] == array[j])
        m++;
      if (VezesRepetidas < m) {
        VezesRepetidas = m;
        item = array[i];
      }
    }
    m = 0;
  }
 return item
}

console.log(repeatInArray([2, 2, 8, 2, 8, 8, 8]))
