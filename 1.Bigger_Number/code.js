// Bigger number Function 

function biggerNum(num1, num2){
let biggerNum
if (num1 > num2) {
    biggerNum = num1
} else {
    biggerNum = num2

}
return biggerNum
}


let num1 = +prompt("please enter the first number")
let num2 = +prompt("please enter the second number")
let Answer = biggerNum(num1, num2)
console.log("The Bigger Number is:", Answer)

