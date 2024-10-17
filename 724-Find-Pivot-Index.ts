function pivotIndex(nums: number[]): number {
    let n = nums.length, lsum = 0, rsum = nums.reduce((a, c) => a + c)
    for (let i = 0; i < n; i++) {
        rsum -= nums[i];
        if (rsum === lsum) return i;
        lsum += nums[i]
    }
    return -1;
};