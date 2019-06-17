// Your code here.
const arrayToList = (arr) => {
  let restOld = null;
  let list;
  for(let i = arr.length - 1; i >= 0; i--){
    list = {}
    list.value = arr[i];
    list.rest = restOld;
    restOld = list;
  }
  return list;
}

listToArray = (list) => {
  let arr = [];
  do{
    arr.push(list.value);
    list = list.rest;
  }while(list!=null);
  return arr;
}

const prepend = (element, list) => {
  let list2 = list;
  
  let tmp = {};
  tmp.value = element;
  tmp.rest = null;
  
  if(list2 === null)
    return tmp;
  
  while (list2.rest != null){
    list2 = list2.rest;
  }
  list2.rest = tmp;
  return list;
}

const nth = (list, index) => {
  let list2 = list;
  for(let i = 0; ((i <= index) && (list2!=null)); i++){
    if(i === index)
    {
      return list2.value;
    }
    list2 = list2.rest;
  }
  return 'undefined';
}

const nthRecursive = (list, index) => {
  if(list === null)
    return 'undefined';
  if(index === 0)
    return list.value;
  return nthRecursive(list.rest, index - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(nthRecursive(arrayToList([10, 20, 30]), 1));
// → 20