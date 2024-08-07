// let s = "abab",
//   p = "ab";

// for (let i = 0; i < s.length - p.length + 1; i++) {
//   let str = "";
//   for (let j = i; j < p.length + i; j++) {
//     str += s[j];
//   }

//   console.log(str);

// }

let map = new Map();

map.set("aaz", 3);
map.set("aaa", 1);
map.set("aay", 4);
map.set("aan", 5);

let arr = Array.from(map.entries());

let res = arr.sort((a, b) => {
  return b[1] - a[1];
});

let keys = res.map((ele) => ele[0]);

console.log(keys);
