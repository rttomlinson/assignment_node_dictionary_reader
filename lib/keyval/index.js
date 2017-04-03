"use strict";

const ui = require('./ui');
const colorize = require('./colorizer');



function init() {
    console.log("Initialize keyval library!");
    // Start listening to STDIN
        process.stdin.resume();
        process.stdin.setEncoding('utf8');
        ui.promptUser();
}




module.exports = {
    "init": init
};