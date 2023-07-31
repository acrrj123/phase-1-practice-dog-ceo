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