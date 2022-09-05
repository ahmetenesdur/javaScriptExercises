export const countWords = (words) => {
    words = words.toLowerCase().match(/[a-z\d]+(?:'[a-z])?/g)
    console.log(words);
    let wordCount = {};
    words.forEach(word => {
        wordCount[word] = wordCount[word] ? wordCount[word] + 1 : 1;
    });
    return wordCount;
};


console.log(countWords('one,two,three'));
