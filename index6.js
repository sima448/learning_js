//chapter3 - Practice Set on loops and Functions
/*let marks = {
    harry: 90,
    shubham: 9,
    Lovish: 56,
    Monika: 4
}
    */
// problem No 1, write a program to print the marks of a student in an object using for loop
//for(let i=0; i < Object.keys(marks).length;i++) {
   // console.log("The marks of "+ Object.keys(marks)[i] + "are" + marks[Object.keys(marks)[i]])
//}
//Problem No 2, write the program in Q1 using for in loop
//for (let key in marks) {
    //console.log("The marks of " + key + " are " + marks[key])
//}

/////////////////////////////
//Program No 3, write a program to print "try again" until the user enter the correct number.
const readlineSync = require('readline-sync');
let cn = 43;
let i;
while (i != cn) {
    console.log("Try again!");
    i = readlineSync.question("Enter the number: ");    
}
console.log("You have entered a correct number");


////////////////////////////////
//program No 4,write a function ti find mean of 5 numbers
/*const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4
    }
console.log(mean(5, 7, 4, 8))
*/













