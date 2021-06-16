/* // 01 - Array
var fruits = ["mango", "lemon", "blueberry"];
console.log(fruits);
console.table(fruits); 

// 02 - Acces
var ingredients = ["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter")); 

// 03 - Add and Remove
var objects = ["pen", "book", "lamp"];
objects.unshift("chair");
    console.log(objects);
objects.pop();
    console.log(objects);
objects.push("laptop");
    console.log(objects);
objects.shift();
    console.log(objects); 

// 04 - Order
var numbers = [4, 10, 8, 12, 6];
numbers.reverse();
    console.log(numbers);
numbers.sort((a, b) => a - b);
    console.log(numbers); 

// 05 - Boucle
var total = 0;
var limit = 10;
for (var i = 0;  i <= limit; i++) {
    total = total + i;
}
console.log(total); 

// 06 - Reverse
var sentence = "Hello Konexio !";
var reversedSentence = "";
for (var i = sentence.length - 1; i >= 0; i--) {
    reversedSentence += sentence[i];
}
console.log(reversedSentence); */




// BONUS *
var goal = 100;
for (var i = 0; i <= goal; i++) {
    if (i % 3 === 0) {
        console.log("fizz");
    }
    else if (i % 5 === 0) {
        console.log("buzz");
    }
    else if (i % 3 === 0 && i % 5 === 0) {
        console.log("buzz");
    }
    else if (i % 7 === 0) {
        continue;
    }
    else {
        console.log(i);
    }
}