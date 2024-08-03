// Next greater element
let arr = [1, 3, 2, 4];
let n = arr.length;

let stack = [];
let result = new Array(n).fill(-1);

stack.push(0);

for (let i = 1; i < n; i++) {
  if (stack.length == 0) {
    stack.push(i);
    continue;
  }
  let topIdx = stack[stack.length - 1];

  while (stack.length && arr[i] > arr[topIdx]) {
    result[topIdx] = arr[i];
    // x is NGE of top of stack
    stack.pop();
    topIdx = stack[stack.length - 1];
    // we found the nge for stack top, now we can pop
  }
  stack.push(i);
}

// while (stack.length > 0) {
//   let topIdx = stack.pop();
//   result[topIdx] = -1;
// }

console.log(result);
