const fs = require('fs');

function Loader() {
    this._dictionaries = [];
    this._dictionary = {};
    this.scan = function(path) {
        let dicList = fs.readdirSync(path).sort();
        //scrub the dicList
        dicList = dicList.filter((file) => {
            let extension = /\.[^.]*$/.exec(file);
            return extension == ".json";
        });
        //strip the extension off the end of each entry
        dicList = dicList.map((file) => {
            return file.substring(0, file.indexOf('.json'));
        });
        this._dictionaries = dicList;
        return dicList;
    };
    this.load = function(path) {
        let dictionaryData = JSON.parse(fs.readFileSync(path, 'utf8'));
        this._dictionary = dictionaryData;
        return dictionaryData;
    };
}
module.exports = Loader;
