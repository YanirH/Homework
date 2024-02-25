// api https://rickandmortyapi.com/api/episode


(async function () {

  async function fetchEpisodes() {
    let result = await fetch('https://rickandmortyapi.com/api/episode')
    let data = await result.json()
    return data.results
  } // getting all the episodes array 


  async function fetchCharacters(characters: any[]) {
    const promises = characters.map(url =>
      fetch(url).then(response => response.json())
    );
    const charactersArray = await Promise.all(promises);
    return charactersArray;
  } //getting the characters as objects inside an array

  const userInputSearch = document.querySelector('#userInput') // user input for search

  let episodesArray = await fetchEpisodes() // episodes array as a variable 

  async function createTable(array: Episode[], parentTable: string, userInput: number = 14) {
    const parent = document.querySelector(`#${parentTable}`)
    createTH(`${parentTable}`)
    const tbody = parent?.querySelector('tbody')
  
    array.forEach(async episode => {
      if (parentTable == 'above14CharEpisodeTable' && episode.characters.length < userInput) {
       
      } else {
      tbody?.appendChild(await createRow([episode]))
      }
    });
    return tbody
  }

function createTH (parentTable: string) {
const parent = document.querySelector(`#${parentTable}`)
const thead = parent?.querySelector('thead')
Object.keys(episodesArray[0]).forEach(element => {
  let th = document.createElement('th')
  th.textContent = element
  thead?.appendChild(th)
});  
return thead
} // creating the table headers

  async function createRow(array: Episode[]) {
    const masterTR = document.createElement('tr')
    let tr = document.createElement('tr');
    let charTR = document.createElement('tr');
    
    array.forEach(episode => {
     
      // Iterate over each value in the Episode object
      Object.values(episode).forEach(async value => {
        
        let td = document.createElement('td');
        // Check if value is an array, and if so, convert it to a string (e.g., list of character names)
        if (Array.isArray(value)) {
          let showBtn = document.createElement('button')
          showBtn.textContent = "Show Characters"
          showBtn.addEventListener('click', function() {
            if (charTR.style.display === 'none') {
              charTR.style.display = 'block';
              this.textContent = 'Hide Characters'
            } else {
              charTR.style.display = 'none';
              this.textContent = 'Show Characters'
            }
          })
          tr.appendChild(showBtn)
          await createCharacters(charTR, value)
          console.log(charTR)
          //tr.appendChild(charTR)
        
        } else {
          td.textContent = String(value);
        }
        tr.appendChild(td);
      });
        masterTR.appendChild(tr)
        masterTR.appendChild(charTR)
    });
    return masterTR
    
  }

async function createCharacters (charTR: HTMLTableRowElement, value: any[]){

          let charactersArray = await fetchCharacters(value)
          let IMGrow = document.createElement('th')
          let nameData = document.createElement('td')
          charTR.appendChild(nameData)
          charactersArray.forEach(character => {
            let characterIMG = document.createElement('img')
            let characterName = document.createElement('span')
            characterIMG.src = character.image
            characterIMG.classList.add('IMG')
            characterName.textContent = character.name + ' | '
            //characterIMG.classList.add('span')
            IMGrow.appendChild(characterIMG)
            nameData.appendChild(characterName)
            charTR.appendChild(IMGrow)
            charTR.appendChild(nameData)
            charTR.style.display = 'none'
            charTR.classList.add('charTR')
            console.log(charTR)
            return charTR
          });          
}




  interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: [];
    url: string;
    created: string;
  }

  interface Character {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    image: string,
  }

  createTable(episodesArray, 'episodesTable')
  createTable(episodesArray, 'above14CharEpisodeTable',)
})();






