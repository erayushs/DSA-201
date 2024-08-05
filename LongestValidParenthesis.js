// JavaScript Program for the above approach
function findMaxLen(str) {
  let n = str.length;

  // Create a stack and push -1 as
  // initial index to it.
  let stack = [];
  stack.push(-1);

  // Initialize result
  let result = 0;

  // Traverse all characters of given string
  for (let i = 0; i < n; i++) {
    // If opening bracket, push index of it
    if (str.charAt(i) == "(") {
      stack.push(i);
    }

    // If closing bracket, i.e.,str[i] = ')'
    else {
      // Pop the previous opening
      // bracket's index
      if (stack.length != 0) {
        stack.pop();
      }

      // Check if this length formed with base of
      // current valid substring is more than max
      // so far
      if (stack.length != 0) {
        result = Math.max(result, i - stack[stack.length - 1]);
      }

      // If stack is empty. push current index as
      // base for next valid substring (if any)
      else {
        stack.push(i);
      }
    }
  }

  return result;
}

// Driver code
let str = "((()()";

str = "()(()))))";

console.log(findMaxLen(str));
