"use strict";

let dictionarySelect = require('./dictionary_select');

const ConsoleOperations = {};


ConsoleOperations.initialPrompt = function initialPrompt() {
    this._promptSelector(0);  
};


ConsoleOperations._promptSelector = function _promptSelector(state) {
    
    if (state == 0) {
      dictionarySelect();
    }
};




module.exports = ConsoleOperations;