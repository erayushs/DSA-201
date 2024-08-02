function countDistinctElements(n, k, arr) {
  // create a freq map for the first window
  if (k > n) {
    return [];
  }

  let freqMap = new Map();
  let result = [];
  for (let i = 0; i < k; i++) {
    // K
    let key = arr[i];
    if (freqMap.has(key)) {
      // increase the freq
      let prevFreq = freqMap.has(key);
      freqMap.set(key, prevFreq + 1);
    } else {
      freqMap.set(key, 1);
    }
  }
  result.push(freqMap.size);

  // slide the window forward

  for (let i = k; i < n; i++) {
    // N-K
    let newEle = arr[i];
    let oldEle = arr[i - k];

    if (freqMap.get(oldEle) == 1) {
      freqMap.delete(oldEle);
    } else {
      let prevFreq = freqMap.get(oldEle);
      freqMap.set(oldEle, prevFreq - 1);
    }

    if (freqMap.has(newEle)) {
      // increase the freq
      let prevFreq = freqMap.has(newEle);
      freqMap.set(newEle, prevFreq + 1);
    } else {
      freqMap.set(newEle, 1);
    }

    result.push(freqMap.size);
  }

  return result;
}
