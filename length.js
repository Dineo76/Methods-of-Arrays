prompt = require('prompt-sync')();

let x = prompt("enter length;");
let y = prompt("enter width");

let num1 = parseFloat(x);
let num2 = parseFloat(y);

function area(length, width){
    return length * width;
}
console.log(area(num1, num2));