function generateRange(min, max, step) {
    let arr = [min];
    for (let i = 1; arr[arr.length - 1] + step <= max; i++) {
        arr.push(arr[i - 1] + step)
    }
    return arr;
}
console.log(generateRange(1, 3, 1));
