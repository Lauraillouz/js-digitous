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
var pokemons = [];

function catchPokemon(id) {
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((res) => {
        let data = res.data;
        console.log(id);
        console.log(data.name);
    })
}
catchPokemon(167);