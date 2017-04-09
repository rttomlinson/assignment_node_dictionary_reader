const jsonStats = {};
jsonStats.getWordCount = function(data) {
    //data passed should be a JSON object
    return Object.keys(data).length;
};
jsonStats.getWordFrequency = function(data) {
    //data passed should be a JSON object
    //make holder object for letters;
    let letterFrequency = "abcdefghijklmnopqrstuvwxyz".split("").reduce((freObj, letter) => {
        freObj[letter] = 0;
        return freObj;
    }, {});
    //go through all the keys and match the first letter to the count and increment
    let words = Object.keys(data);
    words.forEach((word) => {
        letterFrequency[word[0]] = letterFrequency[word[0]] + 1;
    });
    return letterFrequency;
};
module.exports = jsonStats;
