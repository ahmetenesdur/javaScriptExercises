export const findAnagrams = (word, anagrams) => {
    const reWord = word.toLowerCase().split('').sort().join('');
    return anagrams.filter((anagram) => anagram.toLowerCase().split('').sort().join('') === reWord && anagram.toLowerCase() !== word.toLowerCase());
};

console.log(findAnagrams('diaper', ['hello', 'world', 'zombies', 'pants']));
console.log(findAnagrams('solemn', ['lemons', 'cherry', 'melons']));
console.log(findAnagrams('BANANA', ['BANANA', 'Banana', 'banana']));
console.log(findAnagrams('orchestra', ['cashregister', 'Carthorse', 'radishes']));