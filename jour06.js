/* // O1 - Format
(function formatDate (string) {
    let myDate = new Date();
    console.log(`${myDate.getDate()}/0${myDate.getMonth() + 1}/${myDate.getFullYear()}`);
})(); */
 

// 02 - Age
function calculateAge (string) {
    let today = new Date();
    let birthYear = string.substring(0, 4);
    birthYear = parseInt(birthYear);
    let age = today.getFullYear() - birthYear;
    console.log(age);
}
calculateAge("1989-05-24");
