export class Matrix {
    constructor(numbers) {
        this.input = numbers.split('\n');
    }
    get rows() {
        console.log(this.input);
        return this.input.map(row => row.split(' ').map(Number));
    }

    get columns() {
        console.log(this.rows);
        console.log(this.rows.map(row => row[0]));
        return this.rows[0].map((_, i) => this.rows.map(row => row[i]));
    }
}

// console.log(new Matrix(`'1 2\n3 4'`));
// console.log(new Matrix('1 2\n3 4').rows[0]);
console.log(new Matrix('1 2\n3 4').columns[0]);
// console.log(new Matrix('1 2 3\n4 5 6').columns[2]);

let a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(a.map(row => row[0]));

// let a = ('1,2,3,4,5,6,7,8,9');
// let b = a.split(',')
// let c = b.map(row => row.split(' '))
// console.log(a);
// console.log(b);
// console.log(c);