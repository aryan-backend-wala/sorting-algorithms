function isSorted(arr, n){
  for(let i=1;i<n;i++){
    if(arr[i] < arr[i-1]){
      return false;
    }
  }
  return true;
}

function swap(arr, index1, index2){
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function shuffle(arr, n){
  for(let i=0;i<n;i++){
    let index = Math.floor(Math.random() * n);
    swap(arr, n-i-1, index);
  }
  return arr;
}

function permutation_sort(arr){
  const n = arr.length;
  let count = 0;
  while(!isSorted(arr, n)){
    count++;
    arr = shuffle(arr, n);
  }
  return { sorted_array: arr, count: count};
}

const arr = [3, 2, 5, 1, 0, 4];
const arr1 = [1,2,3,4,5];
const _print = permutation_sort(arr);
console.log(_print);