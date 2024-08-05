let stack = [];
let min = null;

function push(x) {
  if (min === null || x <= min) {
    // Push the old minimum value to the stack before the new minimum
    stack.push(min);
    min = x;
  }
  stack.push(x);
}

function findMin() {
  if (min === null) {
    throw new Error("Stack is empty");
  }
  return min;
}

function pop() {
  if (stack.length === 0) {
    throw new Error("Stack is empty");
  }
  const poppedElement = stack.pop();
  if (poppedElement === min) {
    // If the popped element is the current minimum, update the minimum to the next value in the stack
    min = stack.pop();
  }
  return poppedElement;
}

function top() {
  if (stack.length === 0) {
    throw new Error("Stack is empty");
  }
  return stack[stack.length - 1];
}

push(2);
push(4);
push(1);
push(10);
push(13);
push(13);

pop();

console.log(stack);

let Amin = findMin();

console.log(Amin);
