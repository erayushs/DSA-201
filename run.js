// Next greater element
let arr = [1, 3, 2, 4];
let n = arr.length;

let stack = [];
let result = new Array(n);

stack.push(0);

for (let i = 1; i < n; i++) {
  let topIdx = stack[stack.length - 1];

  while (stack.length && arr[i] > arr[topIdx]) {
    result[topIdx] = arr[i];

    stack.pop();
    topIdx = stack[stack.length - 1];
  }
  stack.push(i);
}

while (stack.length > 0) {
  let topIdx = stack.pop();
  result[topIdx] = -1;
}

console.log(result);
