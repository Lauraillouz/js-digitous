/* // 01 - Hello World
console.log("Hello World!"); 

// 02 - String
var test = "My name is Laura";
console.log(test); 

// 03 - Concatenation
var name = "Laura";
console.log("Nice to meet you" + " " + name); 

// 04 - String Length
var testLength = "I'm very long!";
console.log(testLength.length); 

// 05 - Replace
var food = "croissant is meh";
var food = food.replace("meh", "so good");
console.log(food); 

// 06 Up and Down
var basic = "This is Cool";
var basicUp = basic.toUpperCase();
var basicDown = basic.toLowerCase();
console.log(basic, basicUp, basicDown); 

// 07 - Split
var word = "banana";
var letters = word.split("");
console.log(letters); 

// 08 - Template
var age = 32;
var template = (`I'm ${age} years old`);
console.log(template); 




// BONUS
// Entraînerment chaîne de caractères
var a = "a";
var b = "b";
    if (a < b) {
        console.log(a + " est inférieur à " + b);
    }
    else if (a > b) {
        console.log(a + "est supérieur à " + b);
    }
    else {
        console.log(a + " et " + b + " sont égales.");
    } 

// Différence entre String et type primitif pour les chaînes de caractères
var s_prim = "toto";
var s_obj = new String(s_prim);
console.log(typeof s_prim);
console.log(typeof s_obj); 

s1 = "2 + 2"; // chaîne primitive
s2 = new String("2 +2") // objet String
console.log(eval(s1)); // renvoie le nombre 4
console.log(eval(s2)); // renvoie la chaîne
console.log(eval(s2.valueOf())); // renvoie le nombre 4 

// String.property
const string1 = "A string primitive";
const string2 = new String("A String Object");

// String.raw()
const filePath = String.raw`C:\Development\profile\aboutme.html`; // create a variable that uses a windows path without escaping the backlashes
console.log(`The file was uploaded from ${filePath}`); 

// Substring
var chat = "chat noir";
var chat2 = chat.substring(2);
var chat3 = chat.substring(2, 4);
console.log("chat : ", chat);
console.log("chat2 : ", chat2);
console.log("chat3 : ", chat3); 

// Échappement
//String avec deux lignes
var stringTwoLines = "Ceci est une première ligne\nEt ceci en est une deuxième";
console.log(stringTwoLines); 

// String mélangeant des guillemets simple et doubles
var doubleQuotes = "This is a 'joke'";
console.log(doubleQuotes); 

// Banjaur à la place de Bonjour
var changed = "Bonjour";
var search = "o";
var replaceWith = "a";
var changed = changed.split(search).join(replaceWith);
console.log(changed);  */

// deuxième méthode
var changed = "Bonjour";
var updatedChanged = changed.replace(/o/g, 'a');

console.log (updatedChanged);
