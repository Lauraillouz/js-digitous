var prompt = require("prompt");
var moment = require("moment");

/*  // O1 - Format
function formatDate (string) {
    let myDate = new Date(string);
    let day = myDate.getDate();
    let month = myDate.getMonth() + 1;
    if (day < 10) {
        day = `0${day}`;
    }
    if (month < 10) {
        month = `0${month}`;
    }
    console.log(`${day}/${month}/${myDate.getFullYear()}`);
}
formatDate("2021-06-04");
  */
/*
// 02 - Age
function calculateAge (string) {
    let today = new Date();
    let birthYear = string.substring(0, 4);
    birthYear = parseInt(birthYear);
    let age = today.getFullYear() - birthYear;
    console.log(age);
}
calculateAge("1989-05-24"); */


/* // 03 - Validator
prompt.start();

function checkProfile () {
    prompt.get([
        "email", "username", "password"
    ], function (err, res) {
        if (err) {
            return console.log(err);
        }

        let emailRegex = /[a-z\.\-\_]+@[a-z]+\.(fr|com|net|org)/;
        let usernameRegex = /[a-zA-Z0-9\.\-]/;
        let passwordRegex = /(?=.*[0-9\-])(?=.*[a-zA-Z\-])([a-zA-Z0-9\-]+)/;

        if (res.email.match(emailRegex)) {
            console.log(`Your email: ${res.email}`);
        } else {
            console.log(err + " : L'email n'est pas au bon format");
        }
        if (res.username.match(usernameRegex)) {
            console.log(`Your username: ${res.username}`);
        } else {
            console.log(err + " : Le username ne doit comporter que des lettres, chiffres et tirets (les petits");
        }
        if (res.password.match(passwordRegex)) {
            console.log(`Your password: ${res.password}`);
        } else {
            console.log(err + " : Le mot de passe doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre, et peut contenir des tirets");
        }
        if (res.email.match(emailRegex) && res.username.match(usernameRegex) && res.password.match(passwordRegex)) {
        console.log("All good!")
        };
    })
}
checkProfile() */



// BONUS *
/* // Format
function formatDate (string) {
    let today = new Date();
    today = moment(today).format('L');
    day = today.substring(3, 5);
    month = today.substring(0, 2);
    year = today.substring(6);
    console.log(`${day}/${month}/${year}`);
}
formatDate();

// Age
function calculateAge (string) {
    let birthday = moment(string, "YYYYMMDD").fromNow();
    console.log(`You were born ${birthday}`);
}
calculateAge("1989-05-24"); */