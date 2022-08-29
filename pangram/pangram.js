export const isPangram = (letters) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet.split('').every(letter => letters.includes(letter));
};

console.log(isPangram('abcdefghijklmnopqrstuvwxyz'));
console.log(isPangram('a quick'));
console.log(isPangram('the quick brown fox jumps over the lazy dog'));
console.log(isPangram(''));