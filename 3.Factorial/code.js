// Factorial

function factorial(num){
for (let i = num - 1 ; i > 1; i--) {
    num *= i   
}
return num
}


let numInput = +prompt("please enter a number")
let Answer = factorial(numInput)
console.log("The answer is:", Answer)

