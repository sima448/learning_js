//Arrays 
/*let marks_class_12 = [91,82,64,89,54,null,false,"Not Present"]
console.log(marks_class_12)

console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6])
console.log(marks_class_12[7])
console.log(marks_class_12[8])//will be undefined because index 8 does not exist
console.log("The length of marks_class_12",marks_class_12.length)
marks_class_12[8] = 78//adding new value to the array
marks_class_12[0] = 95 //changeing the value of an array
console.log(marks_class_12)
console.log(typeof marks_class_12)*/

//array methods
/*let num = [1,2,3,4,5,6]
let b = num.toString()
console.log(b,typeof b)
let c = num.join(" and ")
console.log(c)
console.log(c, typeof c)
num.pop()
console.log(num)
let r = num.pop()//pop returns the popped element
console.log(num, r)
*/

////////////////////delete is not method but it is operator
/*let num1 = [1, 2, 3, 4, 5, 6, 8, 9]
console.log(num1.length)
//delete num1[0]
console.log(num1.length)
let num1_more = [12, 31, 41, 36, 24, 25, 45, 56]//concat me [0] index ko delete kiya gya he esliye vo empty aayea
let newArray = num1.concat(num1_more)
console.log(newArray)
console.log(num1,num1_more)
let num1_even_more = [234, 456, 467, 897, 234, 354, 385]
let newArray1 = num1.concat(num1_more, num1_even_more)
let newArray2 = num1.concat(num1, num1_more, num1_even_more)
console.log(newArray1)
console.log(newArray2)
console.log(num1_more,num1_even_more)*/

//////////////////////////////////////////
//short method
// let num = [123, 23, 7, 34, 8, 6,349]
// num.sort()
// console.log(num)
////////////compare 
/*let compare = (a, b)=>{ //use the compare() in items ko ascending order se
    return b - a
}
let num1 = [123, 23, 7, 34, 8, 6,349]
num1.sort(compare)
//num1.reverse()
console.log(num1)
*/
/////////////////////////////
//splice and slice
/*let num5 = [552, 345, 5, 8, 9,12, 10, 445]
//num5.splice(2, 4, 1043, 2043, 1234, 2956)
//console.log(num5)
// let deletedValues = num5.splice(2, 4, 1043, 2043, 1234) //2->indexing number 0,1 hai our 4 jo he 5,8,9,445 ko delete kr rha he aur fir add 1043,2043 ,1234
// console.log(deletedValues)//print delete number(5, 8, 9, 12)
// console.log(typeof deletedValues)//object


//let newNum = num5.slice(3)// index 0,1,2,3, ko chod ke output ->[8, 9, 12, 10, 445]
// console.log(newNum)
// let newNum1 = num5.slice(3,5)//index 3,4 ,,print and 5ko chod kr
// console.log(newNum1)

*/

//using for loop with arrays
/*let num6 = [4, 5, 7, 8, 3, 9]
for(let i=0;i<num6.length; i++){ //important loop
    console.log(num6[i])
}

////////////forEach loop
num6.forEach((element) => {
    console.log(element * element)
})


//Array.from :- used to create an array from any other objects
let name = "Harry"
let arr = Array.from(name)
console.log(arr)// change from String to array

//for....of 
for(let i of num6){// important loop
    console.log(i)
}

//for....in 
for(let i in num6){
    console.log(i)
}

//veise all loop are important 

*/
//map,filter & Reduce
/*//map
let arr1 = [34, 52, 61]
//console.log(arr1)
let a = arr1.map((value,index,array)=>{
    //console.log(value,index,array)
    return value + index
})
console.log(a)

//Array filter method
let arr2= [45, 43, 46, 5, 7, 8,94,34]
let a2 = arr2.filter((a)=>{
    return a<10
})
//console.log(a2, arr2)

//Array Reduce method
let arr3 = [1, 2, 3, 4, 5, 6,]
let newarr3 = arr3.reduce((h1, h2)=>{
    return h1 + h2
})
console.log(newarr3)//output 21 because 1+2=3,3+3=6,6+5=11
*/






