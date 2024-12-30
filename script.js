const accessKey = 'RhCGX3unFQf4a7VgTL1faPUv4kenbaFJ9TH5v6VgqBw';

const searchFrom = document.querySelector('form');
const imageContainer = document.querySelector('.images-container');
const searchInput = document.querySelector('.search-input');

//Function to fetch images using Unflash AIP
const fetchImages = async (query) =>{

    imageContainer.innerHTML = '';
     
    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=28&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);

    data.results.forEach((photo) => {
        const imageElement = document.createElement('div');
        imageElement.innerHTML = `<img src="${photo.urls.regular}"/>`;

        imageContainer.appendChild(imageElement);
    });
} 

//Add eventListener to search Form
searchFrom.addEventListener('submit',(e) =>{
    e.preventDefault();
    const inputText = searchInput.value.trim();
    if(inputText !== ''){
        fetchImages(inputText);
    }
    else{
        imageContainer.innerHTML = `<h2>Please enter a search Query.</h2>`
    }
})