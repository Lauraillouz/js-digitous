/* // 01 - Alphabet
function sortLetters (string) {
    console.log(string.split("").sort().join(""));
}

sortLetters("konexio"); 

// 02 - XOXO
function countEach (string) {
    let countX = 0;
    let countO = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "x") {
            countX++;
        }
        else if (string[i] === "o") {
            countO++;
        }
    }
    if (countX === countO) {
        console.log("true");
    } else {
        console.log("false");
    }
}
countEach("xoxo"); 

// 03 - Palindrome
function checkPal (string) {
    let reverseString = string.split("").reverse().join("");
    if (string === reverseString) {
        console.log("Palindrome !");
    } else if (string !== reverseString) {
        console.log("Nope");
    }
}
checkPal("laptop"); 

// 04 - Swap
function swap (string) {
    let reverseCase = "";
    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        if (letter === letter.toLowerCase()) {
            reverseCase =  reverseCase + letter.toUpperCase();
        } else if (letter === letter.toUpperCase()) {
            reverseCase = reverseCase + letter.toLowerCase();
        }
    }
    console.log(reverseCase);
}
swap("Hello World"); 




// BONUS *
function makeItSpongeBob (string) {
    let crazyString = "";
    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        if (string.indexOf(letter) % 2 === 0 && letter === letter.toUpperCase()) {
            crazyString = crazyString + letter.toLowerCase();
        }
         else if (string.indexOf(letter) % 2 === 0) {
            crazyString = crazyString + letter.toUpperCase();
        } else {
            crazyString = crazyString + letter;
        }
    }
    console.log(crazyString);
}
makeItSpongeBob("Javascript is easy"); 

// BONUS **

// BONUS ***
function countEach (string) {
    let countX = 0;
    let countO = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "x" || string[i] === "X") {
            countX++;
        }
        else if (string[i] === "o" || string[i] === "O") {
            countO++;
        }
    }
    if (countX === 0 && countO === 0) {
        console.log("Désolée, je ne compte que les 'x' et les 'o' !")
    } else if (countX === countO) {
        console.log("true");
    } 
    else {
        console.log("false");
    }
}
countEach("XxOoo"); */