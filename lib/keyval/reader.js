"use strict";

const fs = require('fs');


const Reader = {};

Reader.dirReader = function dirReader() {
    
};





module.exports = Reader;


if (!Promise.wrap) {
    Promise.wrap = function wrap(fn) {
        return function() {
            let args = [].slice.call(arguments);
            return new Promise(function (resolve, reject) {
                fn.apply(null, args.concat(function (err, data) {
                    if (err) {
                        reject(err);
                    }
                    resolve(data);
                }));
            });
            
        };
    };
}







