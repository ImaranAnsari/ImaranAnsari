let arr = [10, 20, 40];
let el = 30;
let position = 2;

console.log(arr);

for (let i = arr.length - 1; i >= 0; i--) {
    // console.log(arr[i]);
    if (i >= position) {
        arr[i + 1] = arr[i];
        if (i == position) {
            arr[i] = el;

        }
    }
}
console.log(arr);