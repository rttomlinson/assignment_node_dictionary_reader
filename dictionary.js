const pathModule = require('path');
const Loader = require('./lib/loader');
const loader = new Loader();
const jsonStats = require('./lib/stats');

function Dictionary(path) {
    this._path = path;
    this._dictionaries;
    this._dictionary;
    this.load = function(fileName) {
        //add .json extension to fileName
        fileName = fileName + ".json";
        this._dictionary = loader.load(pathModule.join(this._path, fileName));
    };
    this.scan = function() {
        this._dictionaries = loader.scan(this._path);
        return this._dictionaries;
    };
    this.getStats = function() {
        //return an object with the "wordCount" and "startingLetterFrequency" keys
        let stats = {};
        stats.wordCount = jsonStats.getWordCount(this._dictionary);
        stats.letterFrequency = jsonStats.getWordFrequency(this._dictionary);
        return stats;
    };
    this.showStats = function() {
        let stats = this.getStats();
        console.log(stats);
    };
}
module.exports = Dictionary;
