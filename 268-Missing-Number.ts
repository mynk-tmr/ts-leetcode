function missingNumber(nums: number[]): number {
    const sum = nums.reduce((a, c) => a + c)
    const n = nums.length;
    const ideal = (n * (n + 1)) / 2
    return ideal - sum;
};