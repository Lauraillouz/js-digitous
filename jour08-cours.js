var axios = require("axios");
/* 
axios
    .get("https://restcountries.eu/rest/v2/name/france")
    .then((res) => {
        console.log(res);
        console.log(res.data); */
    /* if (res.status === 200) {
        console.log("Ça a marché");
    } else {
        console.log("Il y a une erreur");
    } */
/*     })
    .catch((err) => {
        console.log("Il y a un problème");
        console.log(err); // permet d'afficher le problème
    }) */ // permet de gérer les éventuelles erreurs


/* Revient à faire comme ci-dessous, sauf que cette syntaxe n'existe pas avec axios
axios.get("https://restcountries.eu/rest/v2/name/france", function(res) {
    console.log(res);
}) */

/* console.log("#1");

axios.get("https://restcountries.eu/rest/v2/name/kazakhstan").then((res) => {
    console.log("#2");

    const data = res.data;

    console.log(`Country : ${data[0].name}`);
    console.log(`Capital : ${data[0].capital}`)
});

console.log("#3"); */

axios.get("https://restcountries.eu/rest/v2/name/spain").then((res) => {
    const firstCountry = res.data[0];

    axios.get("https://restcountries.eu/rest/v2/name/france").then((res) => {
        const secondCountry = res.data[0];

        // isSameCurrency affichera TRUE or FALSE
        const isSameCurrency = firstCountry.currencies[0].code === secondCountry.currencies[0].code;

        console.log(`Same currency between : ${firstCountry.name} and ${secondCountry.name} - ${isSameCurrency}`);
    });
});

/* axios.get(`https://restcountries.eu/rest/v2/name/${userCountry}.toLowerCase()`)
=> sert à rendre dynamique le choix du pays */


// Utilisation avec prompt :
function play() {
    prompt.get("country", function (err, res) {
        const userCountry = res.country;

        axios
            .get(`https://restcountries.eu/rest/v2/name/${userCountry}`)
            .then((res) => {
                console.log(res.data[0].region);
                play();
            });
    });
}
play();
// => va renseigner le continent de chaque pays