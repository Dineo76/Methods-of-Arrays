let globalVar = "This is a global variable"


function myVars(){
    let localVar = "This is a local variable"
    console.log(localVar + "is only accessible inside a method or" + "a function"); 
// or use return instance of console.log
// return localVar

}
myVars()

console.log(globalVar + ", it is accessible everywhere")

// String functions, all these methods become available from String Library

let courses = ["HTML", "CSS", "JS", "REACT"];

//Push method we usenit to add an Element at he end of the array
courses.push("TypeScript")

//Unshift add nn element at the beginning of an array
courses.unshift("NodeJS")

//Pop is used to to remove
courses.pop("Typescript")

//shift removes element at the beginning of the array
courses.shift("NodeJS")
let total = courses.length;
console.log(`Elements inside array courses are ${courses}`);
console.log(`Number of items in an array ${total}`);


let separator = courses.join('|'); //using join method to separate elements with "|" (|)-this symbol is called pipe
console.log(` separate elements ${separator}`);


//we creating a List of strings with variable convertor. 
let convertor = courses.toString();
let caps = convertor.toLocaleUpperCase();
let smalls = convertor.toLowerCase();


console.log(`This array becomes a List of strings ${convertor}`);
console.log(`Testing if string can call uppercase ${caps}`);
console.log(`Testing if string can be smaller cases ${smalls}`)

//2D Array

let student= {
 firstName: "Dineo",
 secondName: "Makofane",
 stipend: 6000
}

console.log(delete student.stipend) // The value will return true if it was able to delete or false it it was not
console.log(student);
console.log(student.firstName, student.secondName)

