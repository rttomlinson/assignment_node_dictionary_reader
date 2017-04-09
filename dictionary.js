const Loader = require('./lib/loader');
const loader = new Loader();

function Dictionary(path) {
    this._path = path;
    this._dictionaries;
    this._dictionary;
    this.load = function() {
        this._dictionary = loader.load(this._path);
    };
    this.scan = function() {
        this._dictionaries = loader.scan(this._path);
        return this._dictionaries;
    };
}
module.exports = Dictionary;
