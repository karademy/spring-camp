const reverseArray = (arr) => {
  let arr2 = [];
  for(let i = arr.length - 1 ; i >= 0; i--){
    arr2.push(arr[i]);
  }
  return arr2;
}

const reverseArrayInPlace = (arr) => {
  let tmp;
  for (let i = 0; i < Math.floor(arr.length/2); i++){
    tmp = arr[i];
  	arr[i] = arr[arr.length - 1 - i];
  	arr[arr.length - 1 - i] = tmp;
  }
  return arr;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]