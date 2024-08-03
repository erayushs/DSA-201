//NEXT GREATER ELEMENT Time Ccomplexity = O(n²);

/*
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
*/

let arr = [1, 3, 2, 4];

let n = arr.length;

let result = new Array(n).fill(-1);
let stack = [];

stack.push(arr[0]);

for (let i = 1; i < n; i++) {
  if (stack[stack.length - 1] < arr[i]) {
    result.shift();
    result.push(arr[i]);
    stack.pop();
    stack.push(arr[i]);
  }
}

console.log(result);
