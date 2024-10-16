function productExceptSelf(nums: number[]): number[] {
    let ans = [], prod = 1, n = nums.length;
    for (let i = 0; i < n; i++) {
        ans[i] = prod;
        prod *= nums[i]
    }
    prod = 1;
    for (let i = n - 1; i >= 0; i--) {
        ans[i] *= prod;
        prod *= nums[i]
    }
    return ans;
};