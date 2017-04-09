"use strict";


const services = require('./lib/keyval');


//Create new session
let session = services.init();
//Start the session
session.run();


