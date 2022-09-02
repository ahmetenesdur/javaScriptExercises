export const rows = (line) => {
    const rows = []
    for (let i = 0; i < line; i++) {
        const arr = [1]
        for (let j = 1; j < i; j++) {
            arr.push(rows[i - 1][j - 1] + rows[i - 1][j])
        }
        if (i > 0) {
            arr.push(1)
        }
        rows.push(arr)
    }
    return rows
};

console.log(rows(5));

// let a = []
// a.push([1])
// a.push([1, 2])
// console.log(a);
// console.log(a[1][1]);