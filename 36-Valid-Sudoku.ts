function isValidSudoku(board: string[][]): boolean {
    const Rset = Array.from({ length: 9 }, () => new Set())
    const Cset = Array.from({ length: 9 }, () => new Set())
    const Boxset = Array.from({ length: 9 }, () => new Set())
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const val = board[r][c];
            const boxIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            if (val === '.') continue;
            if (Rset[r].has(val) || Cset[c].has(val) || Boxset[boxIdx].has(val))
                return false;
            Rset[r].add(val)
            Cset[c].add(val)
            Boxset[boxIdx].add(val)
        }
    }
    return true;
};

//generalised ; M = no.of cols
//boxIndex = Math.floor(r / B_row) * (M / B_col) + Math.floor(c / B_col)
