// ADAM PART \\
const itemInput = document.querySelector(".itemInput");
const itemsNumber = document.querySelector(".itemNumber");
const date = document.querySelector(".date");
const addButton = document.querySelector(".addItemButton");
const cleanButton = document.querySelector(".cleanListButton");
const parentElement = document.getElementById("divi");
const clearButton = document.getElementById("clear");
let itemList = [];
clearButton.addEventListener("click", function () {
  localStorage.clear();
});
// -----------Local Storage Adam------------ \\
const itemsAdamLocal = localStorage.getItem("itemsAdamLocal");
if (itemsAdamLocal) {
  const parentElement = document.getElementById("divi");
  parentElement.innerHTML = itemsAdamLocal;
}
// -----------End Local Storage Adam------------ \\

addButton.addEventListener("click", function () {
  itemList.push({
    itemName: itemInput.value,
  });
  createElementHTML(itemInput, parentElement);
  itemsNumber.textContent = itemList.length;
  date.textContent = new Date();
  itemInput.value = "";
  const itemsAdamContent = parentElement.innerHTML;
  localStorage.setItem("itemsAdamLocal", itemsAdamContent);
});

cleanButton.addEventListener("click", function () {
  itemList = [];
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
  itemsNumber.textContent = 0;
  date.textContent = "";
});

// HAVA PART \\
const itemInputHava = document.querySelector(".itemInputHava");
const itemsNumberHava = document.querySelector(".itemNumberHava");
const dateHava = document.querySelector(".dateHava");
const addButtonHava = document.querySelector(".addItemButtonHava");
const cleanButtonHava = document.querySelector(".cleanListButtonHava");
const parentElementHava = document.getElementById("Hava");
let itemListHava = [];

// -----------Local Storage Hava------------ \\
const itemsHavaLocal = localStorage.getItem("itemsHavaLocal");
const itemsLocal = localStorage.getItem("itemsListHava");
let index = localStorage.getItem("index");
console.log(index);
if (index === null) {
  index = 0;
}
console.log(index);

if (itemsHavaLocal) {
  const parentElementHava = document.getElementById("Hava");
  itemListHava = JSON.parse(itemsLocal);
  itemsNumberHava.textContent = itemListHava.length;
  parentElementHava.innerHTML = itemsHavaLocal;
  initializeDeleteButtons()
}
// -----------End Local Storage Hava------------ \\

addButtonHava.addEventListener("click", function () {
  addElement();
});

function addElement() {
  itemListHava.push({
    itemName: itemInputHava.value,
  });
  localStorage.setItem("index", ++index);

  createElementHTML(itemInputHava, parentElementHava);

  itemsNumberHava.textContent = itemListHava.length;
  const specificDate = new Date();
  dateHava.textContent = specificDate.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // Use 24-hour format
  });

  itemInputHava.value = "";
  const itemsHavaContent = parentElementHava.innerHTML;
  const itemListContent = JSON.stringify(itemListHava);
  localStorage.setItem("itemsHavaLocal", itemsHavaContent);
  localStorage.setItem("itemsListHava", itemListContent);
  localStorage.setItem("itemsNumebr", itemsNumberHava);
}
cleanButtonHava.addEventListener("click", function () {
  itemListHava = [];
  while (parentElementHava.firstChild) {
    parentElementHava.removeChild(parentElementHava.firstChild);
  }
  itemsNumberHava.textContent = 0;
  dateHava.textContent = "";
  localStorage.removeItem("itemsHavaLocal");
  localStorage.removeItem("itemsListHava");
  localStorage.removeItem("itemsNumebr");
});

function createElementHTML(item, parent) {
  let p = document.createElement("p");
  let b = document.createElement("button");

  b.classList.add("b" + `${index}`);
  b.textContent = "X-^";
  p.textContent = item.value;
  p.classList.add("b" + `${index}`);
  parent.appendChild(p);
  parent.appendChild(b);

  b.addEventListener("click", function () {
    const classToBeDeleted = this.className;
    console.log(classToBeDeleted);
    const paragraphToDelete = document.querySelector(`.${classToBeDeleted}`);
    console.log(paragraphToDelete);
    // index--
    localStorage.setItem("index", --index);
    if (paragraphToDelete) {
      paragraphToDelete.remove();
    }

    this.remove();
    const itemsHavaContent = parentElementHava.innerHTML;

    localStorage.setItem("itemsHavaLocal", itemsHavaContent);
  });
}



function initializeDeleteButtons() {
   const deleteButtons = document.querySelectorAll("[class^='b']");
   deleteButtons.forEach(button => {
       button.addEventListener("click", function() {
           const classToBeDeleted = this.className;
           const paragraphToDelete = document.querySelector(`.${classToBeDeleted}`);
           if (paragraphToDelete) {
               paragraphToDelete.remove();
           }
           this.remove();

           // Update local storage after deletion
           const parentElement = this.closest('.col'); // Adjust this to your structure
           const itemsContent = parentElement.innerHTML;
           localStorage.setItem("itemsLocal", itemsContent); // Change 'itemsLocal' to the correct key
       });
   });
}