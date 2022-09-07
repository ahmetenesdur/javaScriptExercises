export const parse = (phrase) => {
    return phrase.replace(/[-_]/g, ' ').split(' ').map(word => word[0]).join('').toUpperCase();
};

console.log(parse('Something - I made up from thin air'));