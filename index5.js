//chapter-3 Loops & Function

//program to add first n natural numbers
/*let sum=0
const readlineSync = require('readline-sync')
let n = readlineSync.question("Enter the value of n")
n = Number.parseInt(n)
for(let i =0;i<n; i++){
    //for(let i =0;i<500; i++){
   //console.log(i+1) 
   //sum += i
    //}
    sum += (i+1)
        //console.log((i+1), "+")
    
}  
console.log("Sum of first " + n + "natural numbers is " + sum)
*/
//////////////////////////
//factorial program using for loop 
// function factorial(n) {
//     if (n === 0 || n ===1) {
//  return 1;
// }
// let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(5));//output :120
// console.log(factorial(7));// '''   :5040
// console.log(factorial(0));//''''    : 1


///////////////////
// let obj = {
//     harry: 90,
//     shubh: 45,
//     shivika: 56,
//     ritika: 57,
//     shiv: 23
// }
// //For in loop
// for (let a in obj){
//     //console.log(a)
//     console.log("Marks of" + a + "are" +obj[a])
// }

// //For of lor
// for (let b of "Harry") {
//     console.log(b)
// }


/////////////////////////////
// While loop
/*const readlineSync = require('readline-sync')
let n = readlineSync.question("Enter the value of n")
n = Number.parseInt(n)
/*let i = 0;
while(i<n){
    console.log(i)
    i++;
}*/

//do while loop
/*let i = 10;
do{
    console.log(i)
    i++;
}
while (i < n) */

////////////////////////////////
//function in js
//normaly
/*let a = 1;
let b = 2;
let c = 3;
console.log("One plus Average of a and b is ",1 + (a + b)/2)
console.log("One plus Average of b and c is ",1 + (b + c)/2)
console.log("One plus Average of c and a is ",1 + (c + a)/2)
*/

////////
/*function onePlusAvg(x , y){
    console.log("Done")// function ke andar yek bar change karne pr vo pure program me changing kr dega hme bar bar change nhi karna pdega yek bar me hi sb jagah change ho jayega
    return 1 + (x + y)/2
}
let a = 1;
let b = 2;
let c = 3;
console.log("One plus Average of a and b is ",onePlusAvg(a , b))
console.log("One plus Average of b and c is ",onePlusAvg(b , c))
console.log("One plus Average of c and a is ",onePlusAvg(c , a))
//both are same output return
*/
//another method print function
const sum = (p ,q)=>{
    return p + q
}
console.log(sum(9,8))

////////////////
const hello = ()=>{
    console.log("Hey how are you. I am to fine yar")
    return "hii"
}
let v = hello();
console.log(v)










