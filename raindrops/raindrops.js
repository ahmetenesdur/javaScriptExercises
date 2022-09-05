export const convert = (drops) => {
    var raindrops = '';
    drops % 3 === 0 ? raindrops += 'Pling' : '';
    if (drops % 5 === 0) raindrops += 'Plang';
    if (drops % 7 === 0) raindrops += 'Plong';
    return raindrops || String(drops)
};

// short way
// return `${drops % 3 ? '' : 'Pling'}${drops % 5 ? '' : 'Plang'}${drops % 7 ? '' : 'Plong'}` || `${drops}`


console.log(convert(1));
console.log(convert(2));
console.log(convert(3));
console.log(convert(5));
console.log(convert(7));
console.log(convert(105));

// let a = convert(52)
// console.log(typeof (a));