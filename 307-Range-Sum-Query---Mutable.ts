class NumArray {
    update(index: number, val: number): void {
        let diff = val - this.nums[index];
        for(let i=index; i<this.nums.length; i++)
            this.run_sum[i] += diff;
        
        this.nums[index] = val;

    }

    run_sum: number[] = []
    constructor(private nums: number[]) {
        let sum = 0;
        for (let i = 0; i < this.nums.length; i++) {
            sum += this.nums[i]
            this.run_sum[i] = sum;
        }
    }

    sumRange(left: number, right: number): number {
        return this.run_sum[right] - this.run_sum[left] + this.nums[left]
    }
}