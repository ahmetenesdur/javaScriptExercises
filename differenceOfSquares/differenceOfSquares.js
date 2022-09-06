export class Squares {
    constructor(numbers) {
        this.number = numbers
    }

    get sumOfSquares() {
        let numbers = [];
        for (let i = 1; i <= this.number; i++) numbers.push(i);
        return numbers.reduce((a, b) => a + b * b, 0);
    }

    get squareOfSum() {
        let numbers = [];
        for (let i = 1; i <= this.number; i++) numbers.push(i);
        return numbers.reduce((a, b) => a + b, 0) ** 2;
    }

    get difference() {
        return this.squareOfSum - this.sumOfSquares;
    }
}
const squares5 = new Squares(5);
console.log(squares5.sumOfSquares);
console.log(squares5.squareOfSum);
console.log(squares5.difference);

// let a = 5;
// console.log(Array.from(Array(a), (_, i) => i + 1));
// console.log([...Array(a + 1).keys()].slice(1));