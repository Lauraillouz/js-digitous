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
countEach("xoxo"); */

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
