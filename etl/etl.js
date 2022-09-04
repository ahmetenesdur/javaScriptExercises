export const transform = (old) => {
    const newSystem  = {};
    Object.keys(old).forEach((key) => {
        old[key].forEach((value) => {
            newSystem[value.toLowerCase()] = Number(key);
        });
    });
    return newSystem;
};

console.log(transform({ 1: ['A', 'E'], 2: ['D', 'G'] }));

// const old = { 1: ['A', 'E'], 2: ['D', 'G'] };
// console.log(old[1]);
// console.log(old[2]);
// console.log(Object.keys(old));