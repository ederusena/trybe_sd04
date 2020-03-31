function findMaiorNome(array) {
  var maiorNome=0;
  var indexOfmaiorNome;
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > maiorNome) {
      maiorNome = array[i].length;
      indexOfmaiorNome = i;
    }
  }
  return array[indexOfmaiorNome];
}

console.log(findMaiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))
