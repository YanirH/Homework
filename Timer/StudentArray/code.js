let studentsArray = []
let above80Arr = []

function addStudent () {
    let nameInput = document.querySelector('.Name').value
    let gradeInput = +document.querySelector('.Grade').value
    let student = {
        username: nameInput, 
        grade: gradeInput,
    }
    studentsArray.push(student)

    let displayContent = '';
    studentsArray.forEach(function(student) {
        displayContent += `Name: ${student.username}, Grade: ${student.grade + ','}\n`;
    });

    
    console.log(studentsArray)

    document.querySelector('.display').textContent = displayContent;
}



function above80() {
    let displayAbove80 = ''; // Define display variable outside the loop

    for (let i = 0; i < studentsArray.length; i++) {
        if (studentsArray[i].grade >= 80) {
            displayAbove80 += `Name: ${studentsArray[i].username}, Grade: ${studentsArray[i].grade}\n`;
        }
    }

    console.log(displayAbove80); // Log the list of students with grades above 80

    document.querySelector('.display').textContent = displayAbove80;
}



function higherThenInput() {
    let displayHigher = ''; // Define display variable outside the loop
    let gradeInput = +document.querySelector('.Grade').value

    for (let i = 0; i < studentsArray.length; i++) {
        if (studentsArray[i].grade >= gradeInput) {
            displayHigher += `Name: ${studentsArray[i].username}, Grade: ${studentsArray[i].grade}\n`;
        }
    }

    console.log(displayHigher); // Log the list of students with grades above 80

    document.querySelector('.display').textContent = displayHigher;
}



document.querySelector('.startButton').addEventListener("click", function() {
    addStudent()
} )

document.querySelector('.above80Button').addEventListener("click", function() {
    above80()
} )


document.querySelector('.Higher').addEventListener("click", function() {
    higherThenInput()
} )

