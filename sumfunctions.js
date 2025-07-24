prompt = require('prompt-sync')();
let x = prompt("type any number:");
let y = prompt("type another number:");
let num1 = parseInt(x);
let num2 = parseInt(y);

function sum(num1,num2){
    this.num1=num1;
    this.num2=num2;
    let answer = num1+num2;
    return answer;
}
console.log(sum(num1,num2));