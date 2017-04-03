"use strict";

const chalk = require('chalk');


const Colorizer = {};


Colorizer.colorize = function colorize(str) {
    //Color string green
    return chalk.green(str);
    
};






module.exports = Colorizer;