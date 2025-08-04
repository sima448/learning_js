//chapter 2 ->practice
//Q1. Use logical operators to find whether the age of a person loes between 10 and 20.
// const readlineSync = require('readline-sync') 
// let age = readlineSync.question("what is your age?")
//  if(age>10 && age<20){
//     console.log("your age lies between 10 and 20");
// }
// else{
//     console.log("your age does not lies between 10 and 20");
// }

//Q2.Explore switch statement
/*const readlineSync = require('readline-sync') 
let age1 = readlineSync.question("what is your age?")
switch(age1){
    case '12':
    console.log("Your age is 12")
    case '13':
    console.log("Your age is 13")
    case '14':
    console.log("Your age is 14")
     break
    case '15':
    console.log("Your age is 15")
    default:
        console.log("Your age is not special")


}*/

/////////////////////////////////////

//Q3. write a js program to find whether a number is divisible by 2 and 3
/*const readlineSync = require('readline-sync') 
let num = readlineSync.question("what is your age?")
num = Number.parseInt(num);
if(num%2==0 && num%3==0){
    console.log("Your number is divisible by 2 and 3")
}else {
   console.log("Your number is not divisible by 2 and 3")

    
}*/

//////////////////////////////////
//Q4.write a js program to find whether a number is divisible by either 2 or 3
/*const readlineSync = require('readline-sync') 
let num1 = readlineSync.question("what is your age?")
num1 = Number.parseInt(num1);
if(num1%2==0 && num1%3==0){
    console.log("Your number is divisible by 2")
}
else{
    console.log("your number is divisible by 3")
}*/

//////////////////////////////
//Q5.print "you can drive" or "you cannot drive" based on age being greater than 18 using ternary operator
let age = 19;
let a1 = age>18 ? "You can drive" : "You cannot drive"
console.log(a1)
