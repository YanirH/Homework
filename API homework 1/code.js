 const noAsyncUL = document.querySelector('.noAsyncUL')
 const asyncUL = document.querySelector('.asyncUL')
 let noAsyncInput = document.querySelector('.noAsyncInput')
 let noAsyncUsersArray = []



 fetch('https://jsonplaceholder.typicode.com/users')
 .then(res=>res.json())
 .then(json => {
    createElements(json, noAsyncUL)
    noAsyncUsersArray = json.map(user => {
        return {
            userName: user.username,
            email: user.email,
        };
    });
    console.log(noAsyncUsersArray)
 })

 async function fetchEmailAddresses(cb) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
    cb(json)
 }

fetchEmailAddresses(function(json) {
    createElements(json, asyncUL)
})

function createElements(array, parentElement) {
    array.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.email;
        li.classList.add ('noAsyncVisibility')
        parentElement.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Correctly selecting all elements with the class
    let listItems = document.querySelectorAll('.noAsyncVisibility');

    noAsyncInput.addEventListener('input', function() {
        if (noAsyncInput.value === '') {
            listItems.forEach(item => item.style.visibility = 'visible');
        } else {
            listItems.forEach(item => item.style.visibility = 'hidden');
        }
    });
});




