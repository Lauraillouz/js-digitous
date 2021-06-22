/* // 01 - Sum
let numbers = [];
let min = 1;
let max = 100;
for (let i = 0; i < 50; i++) {
    let randomNumber  = Math.floor(Math.random() * (max - min + 1) + min);
    numbers.push(randomNumber);
}
let sumNumbers = 0;
for (let i = 0; i <= numbers.length; i++) {
    sumNumbers += numbers[i];
}
console.log(sumNumbers); 

// 02 - Max
let numbers = [];
let min = 50;
let max = 200;
for (let i = 0; i < 50; i++) {
    let randomNumber  = Math.floor(Math.random() * (max - min + 1) + min);
    numbers.push(randomNumber);
}
let maxNumber = 0;
for (let i = 0; i <= numbers.length; i++) {
    if (maxNumber < numbers[i]) {
        maxNumber = numbers[i];
    }
}
console.log(maxNumber); 

// 03 - Unique
let numbers = [];
let min = 50;
let max = 200;
for (let i = 0; i < 50; i++) {
    let randomNumber  = Math.floor(Math.random() * (max - min + 1) + min);
    numbers.push(randomNumber);
}
console.log(numbers);
let myNumber = 0;
let i = 0;
while (i <= numbers.length) {
    i++;
    if (numbers[i] >= 75 && numbers[i] <= 100) {
        myNumber = numbers[i];
        break;
    }
}
console.log(`${myNumber} is the first number between 75 and 100`); */

// 04 Nested Loop
let words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
let letters = [];
for (i = 0; i <= words.length; i++) {
    words[i].split("");
}
console.log(words);
