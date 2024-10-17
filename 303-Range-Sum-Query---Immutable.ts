class NumArray {
    dp = []
    constructor(nums) {
        this.dp[0] = 0; //query is inclusive of r, so we gotta go r+1
        for (let i = 1; i <= nums.length; i++)
            this.dp[i] = this.dp[i - 1] + nums[i-1]
    }
    sumRange(l, r) {
        return this.dp[r + 1] - this.dp[l]
    }
}
