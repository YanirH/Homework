// In the Power of Function 

function powerOf(num1, num2){
    let result = 1
    
for (let i = 0; i < num2; i++) {
    
    result = result * num1
    console.log(i)
}

return result
}


let num1 = +prompt("please enter the base number")
let num2 = +prompt("please enter the power of number")
let Answer = powerOf(num1, num2)
console.log("The answer is:", Answer)

