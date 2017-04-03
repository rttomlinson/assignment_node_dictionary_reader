"use strict";

const ConsoleOperations = {};


ConsoleOperations.promptUser = function promptUser() {


    
    selectDictionary();
        
    function selectDictionary() {

    
      // Inline function to handle
      // message output
      var showMessage = (err) => {
        console.log('Welcome. Please select a dictionary');
        console.log('Type quit or \\q to exit');
        if (err) {
          console.error(err);
        }
      };
    
    
      // Display message
      showMessage();
    }
    
      // Handler for STDIN data
      // event
      var onData = (data) => {
        data = data.trim();
    
        // If user input provides a valid input, go to next state
        if (data === 'NOTHING HAHAHAHAH') {
            //Should we pause? We need to start again at next prompt
          process.stdin.pause();
          process.stdin.removeListener('data', onData);
    
          // ----------------------------------------
          // Go to next view here
          // ----------------------------------------
        } else if (data === '\\q' || data === 'quit') {
    
          console.log("Goodbye");
          process.exit();
          
        } else {
    
          // prompt user for input again
          selectDictionary();
        }
      };
    
      // Set the listener
      process.stdin.on('data', onData);
};




module.exports = ConsoleOperations;