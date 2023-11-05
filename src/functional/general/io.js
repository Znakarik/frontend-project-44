import readlineSync from "readline-sync";
function showBaseGameStart() {
    console.log('Welcome to the Brain Games!')
}

function askName() {
    return readlineSync.question('May I have your name? ');
}

function showGreetings(name) {
    console.log('Hello, ' + name);
}

export {
    showBaseGameStart, askName, showGreetings
}