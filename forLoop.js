/* // 01 - Somme des carrés
let result = 0;
for (let i = 5; i <=10 ; i++) {
    result += i*i;
}
console.log(result); 

// 02 - Comptons
let result = 0;
for (let i = 100; i <= 1000; i++) {
    if (i % 7 === 0) {
        result ++;
    }
}
console.log(result); 

// 03 - Chanceux
let result = 0;
    let min = 1;
    let max = 6;
for (let i = 1; i <= 20; i++) {
    let random =  Math.floor(Math.random() * (max - min + 1) + min);
    if (random >= 5) {
        result += random;
    }
}
console.log(result);

// 04 - Des boîtes
console.log(box1) 
/* affichera :
17
*/
console.log(box2) 
/* affichera :
30
*/
console.log(i) 
/* affichera :
14
*/

// 05 - Des setiob
console.log(box1) 
/* affichera :
42
*/
console.log(box2) 
/* affichera :
0
*/

// 06 - Encore des boîtes
console.log(box1) 
/* affichera :
5
*/
console.log(box2) 
/* affichera :
-2
*/
console.log(i) 
/* affichera :
-4
*/