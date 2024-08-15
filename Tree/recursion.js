/* function factorial(n) {
  console.log(n);

  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); */

function range(a, b) {
  if (a > b) return [];

  let number = range(a, b - 1);
  number.push(b);
  return number;
}

console.log(range(1, 5));
