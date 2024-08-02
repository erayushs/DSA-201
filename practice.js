//NEXT GREATER ELEMENT

let arr = [1, 3, 2, 4]; // Ans = 3, 4, 4, -1

let n = arr.length;

let result = [];
for (let i = 0; i < n; i++) {
  let found = false;
  for (let j = i + 1; j < n; j++) {
    if (arr[i] < arr[j]) {
      result.push(arr[j]);
      found = true;
      break;
    }
  }

  if (!found) {
    result.push(-1);
  }
}

console.log(result);
