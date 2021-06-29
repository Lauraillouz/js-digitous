var prompt = require("prompt");
var colors = require("colors");

/* // 01 - Calculator
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
console.log(calculated); */
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




// BONUS *

prompt.start();

var words = ["brute", "poule", "botte", "pelle", "maire", "tarte", "terre"]
var randomWord = words[Math.floor(Math.random() * words.length)];
// console.log(randomWord);
var count = 1;
var wordLength = 5;

var schema = {
    name: "word",
    description: "Quel est le mot mystère ?",
    pattern: new RegExp (`^[a-z]{${wordLength}}$`),
    required: true,
    message: `Entrez un mot de 5 lettres dont la première letter est ${randomWord[0]}`
}

function motus () {
    prompt.get(schema, function (err, res) {
        if (count <= 6 && res.word === randomWord) {
            return console.log("Bravo !!!");
        } else if (count <= 6 && res.word.length > wordLength) {
            return console.log("Trop de lettres, dommage...");
        } else if (count <= 6 && res.word.length < wordLength) {
            return console.log("Pas assez de lettres, dommage...")
        } else if (count > 6) {
            return console.log("dommage...");
        } else if (count <= 6 && res.word !== randomWord) {
            var answer = res.word.split("");
            var randomWordArray = randomWord.split("");
            for (var i = 0; i < wordLength; i++) {
                for (var j = 0; j < wordLength; j++) {
                    if (answer[i] === randomWordArray[j] && i === j) {
                        answer[i] = answer[i].red;
                    } else if (answer[i] === randomWordArray[j] && i !== j) {
                        answer[i] = answer[i].yellow;
                    }
                } 
            }
            count++;
            console.log(answer.join(""));
            motus();
        }
    })
}
motus();