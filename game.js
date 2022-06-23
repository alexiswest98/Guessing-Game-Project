const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber;

function askRange(){
    rl.question("Enter a max number: ", (max)=> {
        let maxC = Number(max)
        rl.question("Enter min number: ", (min) =>{
            let minC = Number(min)
            console.log(`Im thinking of a number between ${minC} and ${maxC}`)

            secretNumber = randomInRange(minC, maxC)

            askGuess();
        })
    })
}

function randomInRange(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);


}

function askGuess(){
rl.question("Enter a guess: ", (num)=> {
    let converted = Number(num)
    if (checkGuess(converted) === false) return askGuess();
    else console.log("You win!") ;
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
        console.log("You Win!")
        return true
    }
};

askRange()
