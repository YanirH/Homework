let gradeList = []




function checkIfOver100 (num1){

    
    if (num1 > 100) {
        num1 = 100
        return num1
    } else {
        return num1 
    }
    
}



function calculateGrade () {
    let nameInput = document.querySelector(".nameInput").value
    let gradeInput = document.querySelector(".gradeInput").value
    let nameLength = +nameInput.length;
    let bonus = nameLength * 2;
    let answer = +bonus + +gradeInput;
    answer = checkIfOver100(answer)
    document.querySelector(".span").textContent = "your final grade is: " + answer;
    console.log (+answer)
    gradeList.push(nameInput, "-", answer)
    document.querySelector(".spanArray").textContent = gradeList;
    console.log(gradeList)
}
