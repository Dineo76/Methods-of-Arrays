// Anonymous function- it doesnt have a name only declaration and a variable

let num1, num2;
let modulus= function(num1, num2){
    num1=100;
    num2=5;
    let answer = num2%num1;
    console.log(answer)
}
modulus(num1, num2)