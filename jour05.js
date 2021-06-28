/* var prompt = require("prompt"); */

// 01 - Calculator
function calculate(num1, operator, num2) {
    if (operator === "+") {
        console.log(num1 + num2);
    }
    if (operator === "-") {
        console.log(num1 - num2);
    } 
    if (operator === "x") {
        console.log(num1 * num2);
    } 
    if (operator === "/") {
        console.log(num1 / num2);
    } 
    if (operator === "%") {
        console.log(num1 % num2);
    }
} 
let calculated;
calculated = calculate(135, "/", 25);
console.log(calculated);
/* let stringNumbers = process.argv.slice(2);
let numberOne = parseInt(stringNumbers[0]);
let operator = stringNumbers[1];
let numberTwo = parseInt(stringNumbers[2]);
calculate(numberOne, operator, numberTwo);  */
/* 
// 02 - Table
var {multiply, addition} = require("./table-utils.js");
let stringNumber = process.argv.slice(2);
let number = parseInt(stringNumber[0]);
multiply(number); 

// 03 - Separate Table
addition(number);


// 04 - Guess
prompt.start();

let min = 1;
let max = 100;
let mysteryNum = Math.floor(Math.random() * (max - min) + min);

(function play() {
    prompt.get({
        name: "num",
        description: "Quel est le nombre mystère ?"
    }, function (_, res) {
        res.num = parseInt(res.num);
        if (typeof res.num !== "number") {
            console.log("error");
            play();
        }
        else if (res.num < mysteryNum) {
            console.log("C'est plus !");
            play();
        }
        else if (res.num > mysteryNum) {
            console.log("C'est moins !");
            play();
        }
        else {
            console.log("Bravo !!");
        }
    })
})() */




/* // BONUS *
var colors = require("colors");

prompt.start();

var words = ["brute", "poule", "botte", "pelle", "maire", "tarte", "terre"]
var randomWord = words[Math.floor(Math.random() * words.length)];
var count = 1;
var i;
var j;
function motus () {
    prompt.get({
        name: "word",
        description: "Quel est le mot mystère ? Dites 'go' pour commencer",
    }, function (err, res) {
        let guess = "";
        if (count === 1) {
            console.log(`La première lettre est ${randomWord[0]}`);
        }
        else if (count > 6) {
            return console.log("dommage...");
        } else if (count > 6 && guess.length > randomWord.length) {
            return console.log("Trop de lettres, dommage...");
        }

        if (count <= 6 && guess !== randomWord) {
        for (i = 0; i < randomWord.length; i++) {
            if (res.word === randomWord) {
                console.log("Bravo tu as gagné !");
                return;
            }
            else if (res.word[i] === randomWord[i]) {
                guess += res.word[i].red;
                // res.word[i].replace(res.word[i].red);
                console.log(guess);
            }
            /* else if (res.word[j] === randomWord[j] && j !== i) {
                guess += res.word[j].yellow;
                console.log(guess);
            } */ /*
        } 

        }
        count++;
        motus();
    })
}
motus(); */