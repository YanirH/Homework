document.addEventListener('DOMContentLoaded', () => {
    // Elements for Adam's list
    const itemInputAdam = document.getElementById('itemInputAdam');
    const addItemButtonAdam = document.getElementById('addItemButtonAdam');
    const cleanListButtonAdam = document.getElementById('cleanListButtonAdam');
    const groceryListAdam = document.getElementById('groceryListAdam');
    const itemCountAdam = document.getElementById('itemCountAdam');
    let itemsAdam = JSON.parse(localStorage.getItem('groceryItemsAdam')) || [];

    // Elements for Hava's list
    const itemInputHava = document.getElementById('itemInputHava');
    const addItemButtonHava = document.getElementById('addItemButtonHava');
    const cleanListButtonHava = document.getElementById('cleanListButtonHava');
    const groceryListHava = document.getElementById('groceryListHava');
    const itemCountHava = document.getElementById('itemCountHava');

    let itemsHava = JSON.parse(localStorage.getItem('groceryItemsHava')) || [];

    // Function to update a list and its storage
    function updateListAndStorage(items, groceryList, storageKey, itemCountElement) {
        groceryList.innerHTML = '';
        items.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                items.splice(index, 1);
                updateListAndStorage(items, groceryList, storageKey, itemCountElement);
            });
            listItem.appendChild(deleteButton);
            groceryList.appendChild(listItem);
        });
        localStorage.setItem(storageKey, JSON.stringify(items));
        
    itemCountElement.textContent = `Item count: ${items.length}`;
    }






    
    // Event listeners for Adam's list
    addItemButtonAdam.addEventListener('click', () => {
        if (itemInputAdam.value.trim() !== '') {
            itemsAdam.push(itemInputAdam.value);
            updateListAndStorage(itemsAdam, groceryListAdam, 'groceryItemsAdam', itemCountAdam);

            itemInputAdam.value = '';
        }
    });
    cleanListButtonAdam.addEventListener('click', () => {
        itemsAdam = [];
        updateListAndStorage(itemsAdam, groceryListAdam, 'groceryItemsAdam', itemCountAdam);
    });

    // Event listeners for Hava's list
    addItemButtonHava.addEventListener('click', () => {
        if (itemInputHava.value.trim() !== '') {
            itemsHava.push(itemInputHava.value);
            updateListAndStorage(itemsHava, groceryListHava, 'groceryItemsHava', itemCountHava);
            itemInputHava.value = '';
        }
    });
    cleanListButtonHava.addEventListener('click', () => {
        itemsHava = [];
        updateListAndStorage(itemsHava, groceryListHava, 'groceryItemsHava', itemCountHava);
    });

    // Initial rendering of the lists
    updateListAndStorage(itemsAdam, groceryListAdam, 'groceryItemsAdam', itemCountAdam);
    updateListAndStorage(itemsHava, groceryListHava, 'groceryItemsHava', itemCountHava);
});

