// let array = [3, 1, 2, 10, 1];
// o/p= [3,4,6,16,17];


function runningSum(ary) {

    let ans = new Array(ary.length);
    ans[0] = ary[0]

    for (let i = 0; i <= ary.length - 1; i++) {

        ans[i] = ans[i - 1] + ary[i];

    }
    return ans
}
console.log('sum of array', runningSum([3, 1, 2, 10, 1]));