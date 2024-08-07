// Distinct Elements In A Window
//Brute Force

/* 
if(b > n) {
        return [];
    }
    let sizes = [];
    for(let i=0; i<n-b+1; i++){
    let array = [];
        for(let j=i; j<b+i; j++){
            array.push(arr[j]);
        }
        let set = new Set(array);
        sizes.push(set.size);
    }

    return sizes;
*/

// let set = new Set([1, 1, 1, 1, 1]);

// console.log(set.values().next().value);

let arr = [1, 1, 1, 1, 3, 5, 2, 1, 3, 3, 5, 5, 5];

let map = new Map();

for (let i = 0; i < arr.length; i++) {
  if (map.has(arr[i])) {
    map.set(arr[i], map.get(arr[i]) + 1);
  } else {
    map.set(arr[i], 1);
  }
}

console.log(map);

for (let i = 0; i < arr.length; i++) {
  if (map.get(arr[i]) === 1) {
    return arr[i];
  }
}
