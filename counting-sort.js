const count_sort = (input_array) => {
  const max = Math.max(...input_array);
  const count_array = Array(max + 1).fill(0);
  for(let num of input_array){
    count_array[num] =+ 1;
  }
  for(let i=1;i<count_array.length;i++){
    count_array[i] += count_array[i - 1];
  }
  const output_array = Array(input_array.length);
  for(let i=input_array.length - 1;i>=0;i--){
    output_array[count_array[input_array[i]] - 1] = input_array[i];
    count_array[input_array[i]] -= 1;
  }
  return output_array;
}

const input_array = [4, 3, 12, 1, 5, 9];
const output_array = count_sort(input_array);
console.log(output_array);
