var axios = require("axios");

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
        const jokeObject = res.data;
        const randomChuckJoke = jokeObject.value;
        console.log(randomChuckJoke);
    })
}
getFact();

 */