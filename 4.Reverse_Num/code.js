function reverseNumber(number) {
    // Convert the number to a string to manipulate its digits
    let numberString = number.toString();
  debugger
    // Create an array to store individual digits
    let digitsArray = [];
    debugger
    // Push each digit of the number into the array
    for (let i = 0; i < numberString.length; i++) {
        debugger
      digitsArray.push(numberString[i]);
    }
  
    // Print the digits in reverse order
    debugger
    console.log(`The reverse of ${number} is: ${digitsArray.reverse().join('')}`);
  }
  
  // Example usage:
  let inputNumber = +prompt("please enter a number to reverse")
  reverseNumber(inputNumber);