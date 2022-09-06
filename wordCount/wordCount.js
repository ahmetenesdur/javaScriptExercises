export const countWords = (words) => {
    words = words.toLowerCase().match(/\w+(?:'[a-z])?/g);
    console.log(words);
    let wordCount = {};
    words.forEach(word => {
        wordCount[word] = wordCount[word] ? wordCount[word] + 1 : 1;
    });
    return wordCount;
};

console.log(countWords("First: don't laugh. Then: don't cry."));