const Dictionary = require('../dictionary');
const dictionary = new Dictionary('../data');

function stateSelector(data) {
    switch (uiState) {
        case 0:
            startUp();
            break;
        case 1:
            dictionarySelection();
            break;
        case 2:
            dictionaryLoad(data);
            break;
        case 999:
            console.log("Exiting the dictionary. Unsaved dictionary entries will be saved. Are you sure you want to exit?");
            console.log("Too bad. Since we don't actually have a way to check yet.");
            process.exit();
        default:
            console.log("Error occurred. Program aborting");
            process.exit();
    }
}

function startUp() {
    var startUpMessage = () => {
        console.log('Welcome to the Node Dictionary Reader!');
        console.log("=====================================");
        console.log('Enter q to quit');
    };
    startUpMessage();
    uiState = 1;
    stateSelector();
}

function dictionarySelection() {
    //Available selections after loading the dictionaries;
    let dataForNextState;
    let selections = dictionary.scan();
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    var startUpMessage = () => {
        console.log('Here are the available dictionaries');
        selections.forEach((dic, index) => {
            console.log(`${ index + 1 }. ${ dic }`);
        });
        //Need to load and display the dictionaries here
    };
    startUpMessage();
    // Inline function to handle
    // message output
    var showMessage = (err, message) => {
        if (err) {
            console.error(err);
        }
        else {
            console.log(message);
        }
    };
    // Handler for STDIN data
    // event
    var onData = (data) => {
        data = data.trim();
        // If user input "next"
        // let's go to the next
        // state
        if (data === 'q') {
            console.log("Quitting dictionary program");
            uiState = 999;
        }
        else if (selections.length >= parseInt(data) > 0) {
            //Then load that file and go to the next view
            let selection = selections[parseInt(data) - 1];
            console.log(`You selected dictionary ${ selection }`);
            uiState = 2;
            dataForNextState = selection;
        }
        else {
            showMessage(`Invalid Selection: ${ data }. Please select from the menu.`);
        }
        process.stdin.pause();
        process.stdin.removeListener('data', onData);
        stateSelector(dataForNextState);
    };
    // Set the listener
    process.stdin.on('data', onData);
}

function dictionaryLoad(file) {
    console.log(`Now loading file ${ file }`);
    dictionary.load(file);
    dictionary.showStats();
}
//Initialize app and start
let uiState = 0;
// state 999 --> exit program
// state 0   --> initial state
stateSelector();
