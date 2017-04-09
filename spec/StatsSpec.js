const Dictionary = require('../dictionary');
const jsonStats = require('../lib/stats');
describe('stats module', function() {
    let dictionary;
    beforeEach(function() {
        dictionary = new Dictionary('./data');
    });
    describe("get word count function", function() {
        it("gets the word count from the dictionary", function() {
            dictionary.load('dic3');
            expect(jsonStats.getWordCount(dictionary._dictionary)).toEqual(5);
        });
        it("gets the word count from another dictionary", function() {
            dictionary.load('dic1');
            expect(jsonStats.getWordCount(dictionary._dictionary)).toEqual(4);
        });
    });
    describe("get word frequency by starting letter", function() {
        it("returns an object with each letter as a key and values corresponding the the number of occurrances that a word started with that letter", function() {
            dictionary.load('dic1');
            expect(jsonStats.getWordFrequency(dictionary._dictionary)["p"]).toEqual(3);
            expect(jsonStats.getWordFrequency(dictionary._dictionary)["g"]).toEqual(1);
        })
    })
    describe("get word frequency by starting letter", function() {
        it("returns an object with each letter as a key and values corresponding the the number of occurrances that a word started with that letter", function() {
            dictionary.load('dic3');
            expect(jsonStats.getWordFrequency(dictionary._dictionary)["p"]).toEqual(2);
            expect(jsonStats.getWordFrequency(dictionary._dictionary)["g"]).toEqual(1);
            expect(jsonStats.getWordFrequency(dictionary._dictionary)["a"]).toEqual(1);
            expect(jsonStats.getWordFrequency(dictionary._dictionary)["o"]).toEqual(1);
        })
    })
});
