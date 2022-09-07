export const isIsogram = (words) => {
    words = words.toLowerCase().replace(/-/g, ' ').split(' ').join('');
    return words.length === new Set(words).size;
};

console.log(isIsogram('isogram'));
console.log(isIsogram('eleven'));
console.log(isIsogram('Emily Jung Schwartzkopf'));