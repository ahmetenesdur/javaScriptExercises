export const compute = (strandA, strandB) => {
    if (strandA.length !== strandB.length) {
        throw new Error("strands must be of equal length")
    }
    return strandA.split('').reduce((prev, curr, index) => {
        return curr === strandB[index] ? prev : prev + 1
    }, 0)
};

console.log(compute('A', 'A'));
console.log(compute('G', 'T'));
console.log(compute('GGACGGATTCTG', 'AGGACGGATTCT'));

// let a = ('GGACGGATTCTG', 'AGGACGGATTCT')
// console.log(a.split('')[1] == a[1]);