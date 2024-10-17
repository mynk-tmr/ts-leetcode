https://leetcode.com/problems/range-sum-query-2d-immutable/solutions/1204168/js-python-java-c-easy-4-rectangles-dp-solution-w-explanation

class NumMatrix {
    dp: number[][] = [] //sum of rectangle upto (i)(j)
    constructor(matrix: number[][]) {
        const R = matrix.length, C = matrix[0].length;
        this.dp[0] = Array(C + 1).fill(0); //
        for (let i = 1; i <= R; i++) {
            this.dp[i] = Array(C + 1).fill(0);
            for (let j = 1; j <= C; j++) {
                this.dp[i][j] =
                    this.dp[i - 1][j] +     //prev Row
                    this.dp[i][j - 1] -       //prev Col
                    this.dp[i - 1][j - 1] +     //diagonal
                    matrix[i - 1][j - 1]

            }
        }
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        const R = row2 + 1, C = col2 + 1, dp = this.dp
        //reverse the assigning in constructor
        return dp[R][C] - dp[row1][C] - dp[R][col1] + dp[row1][col1]
    }
}
