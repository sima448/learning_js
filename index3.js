//conditional statement
const readlineSync = require('readline-sync');

let a = readlineSync.question("Hey, what's your age? ");
a = Number.parseInt(a); // string को number में convert करना


/////////////////
//if-else condition
if(a > 0){
    console.log("This is a valid age");
} else {
    console.log("This is an invalid age");
}


//////////////////////////////////////
if(a<0){
    console.log("this is an invalid age");
}
else if(a<9){
    console.log("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
    console.log("You are akid and you can think of driving after 18");
}
else{
    console.log("You can now drive as you are above 18");
}
console.log("Done")
console.log("You can", "drive");


// /////////////////////////////////////////
//Homework - Explore switch statement and write a basic program in the comments
// search MDN in switch
const expr ="Papayas";//papayas ke jaghah pe oranges ka bhi use kr sakte he 
switch (expr) {
    case "Oranges":
        console.log("Oranges are $0.50 a pound.");
        break;
        case "Mangoes":
            case "Papayas":
            console.log("Mangoes and papayas are $5.45 a pound.");
            // Excepted output: "Mangoes and papayas are $5.45 a pound."
            break;
            default:
        console.log('Sorry, we are out of ${expr}, ')
}

//////////////////////////////////////

////conditional ternary operator
/*it is only js operator that takes three operands;(? expression to execute is truthy,: expression to execute is falsy)
this operator is frequently used as an alternative to an if....else statement*/
function getFee(isMember){
    return isMember ? "$2.00" : "$10.00";
}
console.log(getFee(true));
console.log(getFee(false));
console.log(getFee(null));