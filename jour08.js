var axios = require("axios");
var prompt = require("prompt");

// 01 - Countries
/* let countriesNames = [];

function getCountries() {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
        const data = res.data;

        countriesNames = data.map(countryName => {
            return countryName.name;
        });
        console.log(countriesNames.join(" - "));
    })
}
getCountries(); */


 /* // 02 - Chuck Norris
function getFact() {
    axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
        const randomChuckJoke = res.data.value;
        console.log(randomChuckJoke);
    })
}
getFact(); */

// 03 Pkemon
/* var pokemons = [];

function catchPokemon(id) {
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((res) => {
        let data = res.data;
        console.log(id);
        console.log(data.name);
    })
}
catchPokemon(167); */



// BONUS * - Black Jack

let playerScore = 0;
let bankScore = ["16", "17", "18", "19", "20", "21"];
    bankScore = parseInt(bankScore[Math.floor(Math.random() * bankScore.length)]);
    console.log(bankScore);


function blackJack () {
    prompt.get({
        name: "turn",
        description: "Black Jack : tapez 'draw' pour avoir une nouvelle carte ou 'pass' pour voir le résultat"
    }, function(err, res) {
        if (err) {
            console.log(err);
        }
        let draw = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        

        if (res.turn === "draw") {
            playerScore += parseInt(draw[Math.floor(Math.random() * draw.length)]);
            if (playerScore > 21) {
                return console.log(`GAME OVER : vous avez obtenu ${playerScore} et dépassé 21`);
            }
            console.log(playerScore);
            blackJack();
        } else if (res.turn === "pass") {
            if (playerScore > 21) {
                console.log(`GAME OVER : vous avez obtenu ${playerScore} et dépassé 21`);
            } else if (playerScore <= bankScore) {
                console.log(`GAME OVER : vous avez obtenu ${playerScore}, la banque a obtenu ${bankScore} et vous a battu`);
            } else if (playerScore === 21) {
                console.log("BLACK JACK !!!");
            } else if (playerScore > bankScore) {
                console.log(`BRAVO : vous avez obtenu ${playerScore} et battu la banque qui a obtenu ${bankScore}`);
            }
        }

    })
}
blackJack();
