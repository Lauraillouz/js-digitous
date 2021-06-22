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
} */
/* let calculated;
calculated = calculate(5, 4, "x");
console.log(calculated); */
/* let stringNumbers = process.argv.slice(2);
let numberOne = parseInt(stringNumbers[0]);
let operator = stringNumbers[1];
let numberTwo = parseInt(stringNumbers[2]);
calculate(numberOne, operator, numberTwo); 

// 02 - Table
var {multiply, addition} = require("./table-utils.js");
let stringNumber = process.argv.slice(2);
let number = parseInt(stringNumber[0]);
multiply(number); 

// 03 - Separate Table
addition(number);
*/

// 04 - Guess
var prompt = require("prompt");

prompt.start();

let min = 1;
let max = 100;
let mysteryNum = Math.floor(Math.random() * (max - min) + min);
console.log(mysteryNum);
function play() {
    prompt.get({
        name: "num",
        description: "Quel est le nombre mystère ?"
    }, function (err, res) {
        res.num = parseInt(res.num);
        console.log(res.num);
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
        else if (res.num === mysteryNum) {
            console.log("Bravo !!");
        }
    })
}
play();