// <!-- -----------------First User Elements--------------- --> \\ 
const firstUserInput = document.getElementById('firstUserInput')
const firstUserAddButton = document.getElementById('firstUserAddButton')
const firstUserClearButton = document.getElementById('firstUserClearButton')
let firstUserCounter = document.getElementById('firstUserCounter')
const firstUserParentElement = document.getElementById('firstUserItemsContainer')
let firstUserItemsList = JSON.parse(localStorage.getItem('firstUserItemsList')) || []
// <!-- ---------------End First User Elements--------------- --> \\ 

// <!-- -----------------Second User Elements--------------- --> \\ 
const secondUserInput = document.getElementById('secondUserInput')
const secondUserAddButton = document.getElementById('secondUserAddButton')
const secondUserClearButton = document.getElementById('secondUserClearButton')
let secondUserCounter = document.getElementById('secondUserCounter')
const secondUserParentElement = document.getElementById('secondUserItemsContainer')
let secondUserItemsList = JSON.parse(localStorage.getItem('secondUserItemsList')) || []
// <!-- ---------------End Second User Elements--------------- --> \\ 

// <!-- -----------------First User Add & Clear Buttons Functions--------------- --> \\ 
firstUserAddButton.addEventListener('click', function(){
    if (firstUserInput.value.trim() !== '') {
        firstUserItemsList.push({itemName: firstUserInput.value})
        createElementHTML(firstUserItemsList, firstUserParentElement, 'firstUserItemsList')
        firstUserCounter.textContent = firstUserItemsList.length
        firstUserInput.value = '';
    }
})
firstUserClearButton.addEventListener('click', function () {
    firstUserItemsList = []
    localStorage.removeItem('firstUserItemsList')
    createElementHTML(firstUserItemsList, firstUserParentElement, 'firstUserItemsList')
})
// <!-- -----------------End First User Add & Clear Buttons Functions--------------- --> \\ 

// <!-- -----------------Second User Add & Clear Buttons Functions--------------- --> \\ 
secondUserAddButton.addEventListener('click', function(){
    if (secondUserInput.value.trim() !== '') {
        secondUserItemsList.push({itemName: secondUserInput.value})
        createElementHTML(secondUserItemsList, secondUserParentElement, 'secondUserItemsList')
        secondUserCounter.textContent = secondUserItemsList.length
        secondUserInput.value = '';
    }
})
secondUserClearButton.addEventListener('click', function () {
    secondUserItemsList = []
    localStorage.removeItem('secondUserItemsList')
    createElementHTML(secondUserItemsList, secondUserParentElement, 'secondUserItemsList')
})
// <!-- -----------------End Second User Add & Clear Buttons Functions--------------- --> \\ 

























function createElementHTML (itemList, parentElement, storageID) {
    parentElement.innerHTML = ''; 
    firstUserCounter.textContent = firstUserItemsList.length
    secondUserCounter.textContent = secondUserItemsList.length
    itemList.forEach((item, index) => {
        // Create span for item name\\
        let span = document.createElement('span');
        span.textContent = item.itemName;
        span.classList.add('childSpan');

        // Create delete button\\
        let button = document.createElement('button');
        button.textContent = 'X';
        button.classList.add('delButton');
        button.addEventListener('click', function() {
            itemList.splice(index, 1); 
            createElementHTML(itemList, parentElement, storageID); 
        });
        parentElement.appendChild(button);
        parentElement.appendChild(span);
        parentElement.appendChild(document.createElement('br'));
    });
    localStorage.setItem(storageID, JSON.stringify(itemList));
}





























document.getElementById('clearLocal').addEventListener('click', function () {
    localStorage.clear()
})
createElementHTML(firstUserItemsList, firstUserParentElement, 'firstUserItemsList')
createElementHTML(secondUserItemsList, secondUserParentElement, 'secondUserItemsList')