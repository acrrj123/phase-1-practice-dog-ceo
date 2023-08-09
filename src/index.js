const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

// on page load, fetches the images using the url above 
// parses the response as JSON
// adds image elements to the DOM for each image in the array

const container = document.getElementById("dog-image-container")
const breedsContainer = document.getElementById("dog-breeds")
const dropdown = document.getElementById("breed-dropdown")

fetch(imgUrl)
.then(resp => resp.json())
.then(data => renderImages(data.message))

function renderImages(imagesArr) {
  imagesArr.forEach(image => {
    const img = document.createElement('img')
    img.src = image
    container.append(img)
  })
}

const breedUrl = "https://dog.ceo/api/breeds/list/all";

//on page load, fetches all the dog breeds using the url above ⬆️
//adds the breeds to the page in the <ul> provided in index.html

//Once all of the breeds are rendered in the <ul>, add JavaScript so that, when the user clicks on any one of the <li>s, the font color of that <li> changes. This can be a color of your choosing.//

fetch(breedUrl)
.then(resp => resp.json())
.then(data => renderBreeds(data.message))

function renderBreeds(dogsObj) {
  for (key in dogsObj) {
    li = document.createElement('li')
    li.textContent = key
    breedsContainer.append(li)
    li.addEventListener('click', () => li.style.color = 'red')
  }
}
/*I can also use Object.keys(data.message) to convert all the keys into an array, then iterate the array with forEach inside the renderBreeds function.

Once we are able to load all of the dog breeds onto the page, add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown.*/

fetch(breedUrl)
.then(resp => resp.json())
.then(data => filterDogs(data.message))

function filterDogs(dogsObj) {
  dropdown.addEventListener('change', () => {
    const letter = dropdown.value
    const allBreedsArr = Object.keys(dogsObj)
    const filteredArr = allBreedsArr.filter(breed => breed[0] === letter) 
    breedsContainer.textContent = ''
    const filteredObj = Object.fromEntries(filteredArr.map(key => [key, '']))
    renderBreeds(filteredObj)
  }) 
}

/* Other solution:

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

// on page load, fetches the images using the url above 
// parses the response as JSON
// adds image elements to the DOM for each image in the array

fetch(imgUrl)
.then(resp => resp.json())
.then(data => renderImages(data.message)) ;


function renderImages(arrayImages) {
  const imgContainer = document.getElementById("dog-image-container");
  arrayImages.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    imgContainer.appendChild(img);
  });
}

const breedUrl = "https://dog.ceo/api/breeds/list/all";

// After the first challenge is completed, add JavaScript that:
// on page load, fetches all the dog breeds using the url above ⬆️
// adds the breeds to the page in the <ul> provided in index.html.
//Once all of the breeds are rendered in the <ul>, add JavaScript so that, when the user clicks on any one of the <li>s, the font color of that <li> changes. This can be a color of your choice.

let breeds

fetch(breedUrl)
.then(resp => resp.json())
.then(data => {
  breeds = Object.keys(data.message);
  renderBreeds(breeds);
})

const ul = document.getElementById('dog-breeds');

function renderBreeds(breeds) {
  //console.log(breeds)
  breeds.forEach(breed => {
    const li = document.createElement('li');
    li.textContent = breed;
    ul.appendChild(li);
    li.addEventListener('click', () => li.style.color = 'red');
  });
}

//Once we are able to load all of the dog breeds onto the page, add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown.

const dropdown = document.getElementById('breed-dropdown');

dropdown.addEventListener('change', filterBreeds);

function filterBreeds(e) {
  //console.log(e.target)
  let letter = e.target.value;
  let filteredBreeds = breeds.filter(breed => breed[0] === letter);
  //console.log(filteredBreeds)
  ul.innerHTML = '';
  renderBreeds(filteredBreeds);
}

*/








