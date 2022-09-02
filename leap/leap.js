export const isLeap = (year) => {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
};

// short way
// export const isLeap = (year) => {
//     return !(year % 100) ? !(year % 400) : !(year % 4)
// };

console.log(isLeap(1960));
console.log(isLeap(2015));
console.log(isLeap(1970));
console.log(isLeap(1900));
console.log(isLeap(2000));