function nextGreaterElements(nums: number[]): number[] {
    const stack = [] as number[][];
    const NGE = Array(nums.length).fill(-1)
    nums.forEach((val, i) => {
        while (stack.length && stack.at(-1)[1] < val)
            NGE[stack.pop()[0]] = val;
        stack.push([i, val])
    })
    //in stack, we have items with no NGE e.g. 7 <- 4 <- 3
    //we can loop again to empty stack
    nums.forEach((val, i) => {
        while (stack.length && stack.at(-1)[1] < val)
            NGE[stack.pop()[0]] = val;
    })
    return nums.map((_, i) => NGE[i])
};