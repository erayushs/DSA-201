function merge(arr, low, middle, high) {
  let n = arr.length;
  let helper = new Array(n);

  let i = low;
  let j = middle + 1;
  let k = low;

  // pick smaller element first
  while (i <= middle && j <= high) {
    if (arr[i] <= arr[j]) {
      helper[k++] = arr[i++];
    } else {
      helper[k++] = arr[j++];
    }
  }

  // add remaining elements
  while (i <= middle) {
    helper[k++] = arr[i++];
  }
  while (j <= high) {
    helper[k++] = arr[j++];
  }

  // copy back to array
  for (i = low; i <= high; i++) {
    arr[i] = helper[i];
  }
}

function mergeSort(arr, start, end) {
  // recursive function
  // base condition
  if (start >= end) {
    // if there is zero or one element
    return;
  }

  let middle = Math.floor((start + end) / 2); // find the middle

  mergeSort(arr, start, middle); // sort first part by recursive calling the mergeSort

  mergeSort(arr, middle + 1, end); // sort second part by recursive calling the mergeSort

  merge(arr, start, middle, end);
}

function printArray(arr) {
  console.log(arr.join(" ") + "\n");
}

// Example usage:
let arr = [12, 11, 13, 5, 6, 7];
console.log("Array before sorting:");
printArray(arr);

mergeSort(arr, 0, arr.length - 1);

console.log("Array after sorting:");
printArray(arr);
