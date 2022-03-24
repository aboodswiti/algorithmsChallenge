export function extractMatrixColumn(matrix: number[][], column: number): number[] {
    const res = [];
    matrix.forEach((rows) => res.push(rows[column]))
    return res;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));