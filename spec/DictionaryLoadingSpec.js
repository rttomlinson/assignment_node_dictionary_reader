const Loader = require('../lib/loader');
const fs = require('fs');
describe('Loader module', function() {
    let loader;
    describe('the scan function', function() {
        beforeEach(function() {
            loader = new Loader();
        });
        it('collects the files names of all json files sets it to the internal dictionaries property and return the list of file names', function() {
            expect(loader.scan('./data/')).toEqual(['dic1', 'dic2', 'dic3', 'dictionary']);
            expect(loader._dictionaries).toEqual(['dic1', 'dic2', 'dic3', 'dictionary']);
        });
        it('calling scan  with a different directory should replace the current dictionaries and return the list of file names', function() {
            expect(loader.scan('./data2/')).toEqual(['yo1', 'yo2', 'yotionary']);
            expect(loader._dictionaries).toEqual(['yo1', 'yo2', 'yotionary']);
        });
        it('calling scan on an already populated dictionary with a different directory should replace the current dictionaries and return the list of file names', function() {
            expect(loader.scan('./data/')).toEqual(['dic1', 'dic2', 'dic3', 'dictionary']);
            expect(loader.scan('./data2/')).toEqual(['yo1', 'yo2', 'yotionary']);
            expect(loader._dictionaries).toEqual(['yo1', 'yo2', 'yotionary']);
        });
    });
    describe('the load function', function() {
        beforeEach(function() {
            loader = new Loader();
        });
        it('loads the json and stores it in the internal _dictionary property', function() {
            let stringifiedDic = JSON.stringify(JSON.parse(fs.readFileSync('./data/test/testdic.json', "utf8")));
            loader.load('./data/test/testdic.json');
            expect(JSON.stringify(loader._dictionary)).toEqual(stringifiedDic);
        });
        it('loads the json from a different file and stores it in the internal _dictionary property', function() {
            let stringifiedDic = JSON.stringify(JSON.parse(fs.readFileSync('./data/test/testdic2.json', "utf8")));
            loader.load('./data/test/testdic2.json');
            expect(JSON.stringify(loader._dictionary)).toEqual(stringifiedDic);
        });
    });
});
