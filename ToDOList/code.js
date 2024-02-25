let toDoList = [localStorage.getItem('List')]

function addTask () {
    taskInput = document.querySelector('.taskInput').value
    dateInput = document.querySelector('.dateInput').value
    let task = document.createElement('span')
    let date = document.createElement('span')
    const breaker = document.createElement('br')

    task.textContent = taskInput + " AT "
    date.textContent = dateInput
    toDoList.push(taskInput + " At " + dateInput )
    localStorage.setItem('List', toDoList)
    console.log(toDoList)
    document.body.appendChild(breaker);
    document.body.appendChild(task);
    document.body.appendChild(date); 
}

document.querySelector('.addTaskButton').addEventListener('click', function() {
    addTask()
})


let youtube = document.querySelector('.youtube')

youtube.textContent = localStorage.getItem('List')