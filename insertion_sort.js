const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

const insertion_sort = (arr) => {
  const n = arr.length;
  for(let i=1;i<n;i++){
    let key = arr[i];
    let j = i - 1;

    while(j >= 0 && arr[j] > key){
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

const arr = [12, 11, 13, 5, 6];
const _print = insertion_sort(arr);
console.log(_print);
