function findMaxLen(str) {
  let n = str.length;
  let stack = [];
  stack.push(-1);

  let result = 0;

  for (let i = 0; i < n; i++) {
    if (str.charAt(i) == "(") {
      stack.push(i);
    } else {
      if (stack.length != 0) {
        stack.pop();
      }

      if (stack.length != 0) {
        result = Math.max(result, i - stack[stack.length - 1]);
      } else {
        stack.push(i);
      }
    }
  }

  return result;
}

let str = "()(";

console.log(findMaxLen(str));
