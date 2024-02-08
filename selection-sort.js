function swap(arr, index1, index2){
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

function selection_sort(arr){
  for(let i=0;i<arr.length;i++){
    let min_index = i;
    for(let j=i+1;j<arr.length;j++){
      if(arr[j] < arr[min_index]){
        min_index = j;
      }
    }
    swap(arr, min_index, i);
  }
  return arr;
}
const arr = [4,9,2,7,13,75,0];
const _print = selection_sort(arr);
console.log(_print);