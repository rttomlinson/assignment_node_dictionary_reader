"use strict";

const ui = require('./ui');
const colorize = require('./colorizer');
const reader = require('./reader');



function init() {
    console.log("Initialize keyval library!");
    // Start listening to STDIN
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    let session = {};
    //session.state = 0;
    session.run = function() {
        ui.initialPrompt();
    };
    return session;

    
}




module.exports = {
    "init": init
};