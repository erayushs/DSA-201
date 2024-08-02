let str = "the sky is blue";

// console.log(str.split(" ").reverse().join(" "));

let stack = [];

stack = [...str.split(" ")];

let n = stack.length;

let result = "";

for (let index = 0; index < n; index++) {
  result += stack.pop();
  result += " ";
}

console.log(result);
