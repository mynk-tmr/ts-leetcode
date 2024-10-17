//this is same as finding next permute of array/string
//finds in O[n] time & O[n] space. If there was array already, would be O[1]

function nextGreaterElement(n: number): number {
    //calculate pivot -> first sorted pair
    const arr = String(n).split(''), N = arr.length;
    if (N == 1) return -1;

    let pivot = -1;
    for (let i = N - 2; i >= 0; i--) {
        if (arr[i + 1] > arr[i]) {
            pivot = i;
            break;
        }
    }
    if (pivot == -1) return -1; //DESC sorted, can't be permuted
    //swap pivot with its successor
    for (let i = N - 1; i > pivot; i--) {
        if (arr[i] > arr[pivot]) {
            [arr[i], arr[pivot]] = [arr[pivot], arr[i]]
            break;
        }
    }
    //swap after pivots
    let a = pivot, b = N;
    while (++a < --b)
        [arr[a], arr[b]] = [arr[b], arr[a]]

    let ans = Number.parseInt(arr.join(''));
    return ans > 2 ** 31 - 1 ? -1 : ans
};