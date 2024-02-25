// // http://moshe.com/notes

// //get notes

// //(async function () {
//     async function getNotes() {
//         let response = await fetch('http://moshe.com/notes')
//         let notes = await response.json();
//         return notes;
//     }
// //})

// //get notes with a specific prefix

// async function getNote(id) {
//     let response = await fetch(`http://moshe.com/notes/${id}`)
//     let note = await response.json();
//     return note;
// }


// //create a note
// async function createNote (title, body, date) {
//     let response = await fetch ('http://moshe.com/notes' , {
//         method: "POST",
//         body: JSON.stringify({
//             title,
//             body,
//             date,
//         })

//     })
//     let note = await response.json()
//     return note
// }

// //delete a note
// async function deleteNote(id) {
//     let response = await fetch(`http://moshe.com/notes/${id}`, {
//         method: "DELETE"
//     })
//     let note = await response.json();
//     return note;
// }

// //update a note

// async function updateNote(id, title, body, date) {
//     let response = await fetch(`http://moshe.com/notes/${id}`, {
//         method: "PUT", 
//         body: JSON.stringify({
//             title,
//             body,
//             date,
//         })
//     })
//     let note = await response.json();
//     return note;
// }

// // patch a note

// async function updateNote(id, title, body, date) {
//     let response = await fetch(`http://moshe.com/notes/${id}`, {
//         method: "PATCH", 
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             title,
//             body,
//             date,
//         })
//     })
//     let note = await response.json();
//     return note;
// }


  
  
  

async function getUSA() {
  
      let response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
      let notes = await response.json();
      console.log(notes);
      return notes.data; 
  
}

async function fetchData() {
      let tableArray = await getUSA();
          createTable(tableArray);
}

function createTable(tableArray) {
  const table = document.getElementById("myTable"); // Ensure you have this element in your HTML
  tableArray.forEach((element, index) => {
      if (index === 0) {
          table.querySelector("thead").appendChild(createRow(Object.keys(element)));
      }
      table.querySelector("tbody").appendChild(createRow(Object.values(element)));
  });
}

function createRow(array) {
  let tr = document.createElement("tr");
  array.forEach((element) => {
      let td = document.createElement("td");
      td.innerText = element;
      tr.appendChild(td);
  });
  return tr;
}

fetchData();