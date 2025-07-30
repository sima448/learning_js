console.log("JavaScript tutoril:var,let and const")
// var a= 45;
// var b= "harry";
// var c= null
// var d= undefined 
// //ES6 ke time me var ka use maximum hota tha but ab bahut km hota he.

// {
//     var b="hello World!"
//     console.log(b)
   
// }
// console.log(b) // dono bar this hi print huaa

// {
//     let b="hello"
//     console.log(b)
// }
// console.log(b)

///////////////////////////////////

// let b= "harry";
// let c= null
// let d= undefined 
// // let b= 45 // let me same variable ko nhi defined kr sakte he error dega, such as b= harry and b=45,

// {
//     let b="hello World!"
//     console.log(b)
   
// }
// {
//     let b="hello"
//     console.log(b)
// }
// console.log(b)

///////////////////////////////

// const author = "harry"
// //coust author= 5 // throw the error because const has already been declared,ese dubara nhi define kr sakte he
// console.log(author)

// 'var' variable ko fresh code me use nhi karna he,just use 'let' variable and mostly try using 'const' variable more.
// if you want to change 'const' variable that it this place defined 'let' but no 'var' variable

/////////////////////////////
//nn bb ss u -> 7 primitive data type in js
// let a = null;//null
// let b = 546;//number
// let c = true;//can also be false//boolean
// let d = BigInt("234") + BigInt("235")//BigInt
// let e = "Harry"//string
// let f = Symbol("I am a nice symbol")//symbol
// let g = undefined//undefined
// console.log(a,b,c,d,e,f,g)
// console.log(typeof d)

////////////////////////////////

// //Non-primitive data type (Objects) in js
// const item = {
//     "Harry":true,
//     "shubh":false,
//     "Lovish":67,
//     "Rohan": undefined
// }
// console.log(item["Harry"])

////////////////////////////////////////
//chapter-1 practical set
//Q1. create a  variable oftype stringand try to add a number to it.
let a = "Harry"
let b = 9
console.log(a + b)

//Q2. use type of oprator to find the data type of the string in last question.
console.log(typeof (a+b))

//Q3.creat a const object in javascript can you change it to hold  a number later.
const a1 = {
    name: "Harry",
    section: 1,
    isprincipal: false
}
//a1 = 45 //error throw

//Q4. try to add a new key to the const object in program 3 were you able todo it.
a1['name'] = "kanishka"
a1['friend'] = "shuriti"
console.log(a1)

//Q5. write a js program to create a word-meaning dictionary of five words.
const dict = {
    appreciate: "recognize the full worth of.",
    yakka: "work,especially hard work",
    ataraxia: "freedom from emotion distribution"
}
console.log(dict)
console.log(dict['yakka'])