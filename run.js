// Next greater element
let arr = [1, 3, 2, 4];

let stack = [];
stack.push(0);

let result = new Array(n);

for (let i = 1; i < arr.length; i++) {
  let x = arr[i];
  if (stack.length == 0) {
    stack.push(i);
    continue;
  }
  let topIdx = stack[stack.length - 1];

  while (stack.length && x > arr[topIdx]) {
    result[topIdx] = x;
    // x is NGE of top of stack
    stack.pop();
    topIdx = stack[stack.length - 1];
    // we found the nge for stack top, now we can pop
  }
  stack.push(i);
}

while (stack.length > 0) {
  let topIdx = stack.pop();
  result[topIdx] = -1;
}

// return result;
