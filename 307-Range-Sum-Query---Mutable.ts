class NumArray {
    tree: number[] = [] //use a Segment tree; root is at tree[1], for simplifying indexing logic
    n = 0;
    constructor(nums: number[]) {
        this.n = nums.length;
        for (let i = 0; i < this.n; i++) //store leaf nodes -> nums
            this.tree[this.n + i] = nums[i]
        for (let i = this.n - 1; i > 0; i--) //store internal nodes -> partial sums
            this.tree[i] = this.tree[2 * i] + this.tree[2 * i + 1]
    }

    update(index: number, val: number): void {
        let i = index + this.n; //adjust for N
        this.tree[i] = val;
        while (i > 1) {
            i = Math.floor(i / 2) //go to parent for updations
            this.tree[i] = this.tree[2 * i] + this.tree[2 * i + 1]
        }
    }

    sumRange(left: number, right: number): number {
        let A = left + this.n, B = right + this.n + 1;  //+1 bcoz inclusive range
        let sum = 0;
        while (A < B) {
            if (A % 2 === 1) { //odd, it's right child, include it
                sum += this.tree[A]
                A++
            }
            if (B % 2 === 1) { //odd, it's left child, go back
                B--;
                sum += this.tree[B]
            }
            A = Math.floor(A / 2)
            B = Math.floor(B / 2)
        }
        return sum
    }
}
