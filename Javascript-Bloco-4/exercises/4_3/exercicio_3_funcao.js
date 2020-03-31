function findLowest(array) {
  var Lowerest;
  var indexOfLowerest;
  for (var i = 0; i < array.length; i++) {
    if (!Lowerest || array[i] < Lowerest) {
      Lowerest = array[i];
      indexOfLowerest = i;
    }
  }
  return indexOfLowerest;
}

console.log(findLowest([2, 4, 6, 7, 10, 0, -3]))
