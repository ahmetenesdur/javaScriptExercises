// Collatz Conjecture
export const steps = (n) => {
    let steps = 0;
    if (n <= 0) {
        throw new Error('Only positive numbers are allowed');
    }
    while (n > 1) {
        if (!(n % 2)) {
            n = n / 2
        } else {
            n = 3 * n + 1
        }
        steps++
    }
    return steps
};

console.log(steps(16));
console.log(steps(1));
console.log(steps(0));