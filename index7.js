//string 
let name1 = "Harry"
console.log(name1.length)// output -> 5
console.log(name1[0])  // output -> h
let friend = 'Suman'
console.log(friend)// output -> suman

//////////////////////////////
//Template literals
let boy1 = "Prince"
let boy2 = "Rahul"
//let sentance = `boy1 is a friend of boy2` // it is it print krega
let sentance = `${boy2} is a friend of ${boy1}`; 
console.log(sentance);

//Escape Sequence Characters
let fruit = "Bana\"na"//'Bana\'na'
console.log(fruit.length);
console.log(fruit)

////////////////////////////////////////////////////////
//string method
let name = "Harry\"";
console.log(name.length)//output -> 6
console.log(name.toUpperCase()) //output -> HARRY"
console.log(name.toLowerCase())//output -> harry
console.log(name.slice(2,5))
console.log(name.slice(3))
console.log(name.replace("Har", "Per"))
//////////////////
let friend1 = "Naman"
console.log(name.concat(" is a friend of ", friend, "ok"))
let friend2 = "           Saloni           " //left & right space
console.log(friend2.trim())
console.log(friend2)

////////////////
let fr = "Shivika" + "Raman" + "Prince" //concateness
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr[3])
console.log(fr[4])
console.log(fr)
/////////////////////////////////
// QuickQuiz: Use a for loop to print a string
const myString = "Hello, JavaScript!";
for (let i = 0; i < myString.length; i++){
    console.log(myString[i]);
}

//////////////////////////////////////////
//Q1.what will the following print  name the line in javascript
let str ="Hre\""
console.log(str.length)
const sentence = "The quick brown fox jumps over the lazy dog.";
const word = "fox"//output -> true when  fox2 output ->false
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word) ? "is" : "is not"} in the sentence`,);

// Expected output: "The word "fox" is in the sentence"


////////////////////////////
//Q2.Explore the includes starts with  & end with function of the string
const sentence1 = "The quick brown fox jumps over the lazy dog.";
const word1 = "Lion"//output -> true when  fox2 output ->false
console.log(sentence.includes(word))
console.log(`The word "${word1}" ${sentence.includes(word1) ? "is" : "is not"} in the sentence`,);
//////////////////
//Q3.write a program to convert a given string to  lowercase
console.log(word1.toLowerCase())
console.log(word1.toUpperCase())

//Q4.Explore the amount out of this string "please give Rs 1000"
let str2 = "Please give Rs 1000"
let amount = Number.parseInt(str2.slice(15))
console.log(amount)
console.log(typeof amount)
////////////////////////////////
//Q5. Try to change 4th character of a given String were  you able to do it?

let friend3 = "Saloni";
friend3[3] ="a";
console.log(friend3)//friend3 is not change ,because strin is immutable




