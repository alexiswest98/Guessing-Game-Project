const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber = 42

function askGuess(){
rl.question("Enter a guess: ", (num)=> {
    let converted = Number(num)
   if (checkGuess(converted) === false) return askGuess();
    rl.close();
});
};

function checkGuess(num){
    if (num > secretNumber) {
        console.log("Too high")
        return false;
    }
    else if(num < secretNumber){
        console.log("Too low")
        return false;
    }
    else if(num === secretNumber){
        console.log("Correct!")
        return true
    }
};

askGuess();
