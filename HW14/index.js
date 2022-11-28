const array = [1, 2, 3, 4, 5, 6, 7]
const item = 4


function removeElement(array, item) {
  array.splice(item, 1);
  return array;
}

const removedArrElement = removeElement(array, item);
console.log(removedArrElement);
