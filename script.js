//const accessKey = "https://api.unsplash.com/photos/?client_id=RhCGX3unFQf4a7VgTL1faPUv4kenbaFJ9TH5v6VgqBw";

const searchFrom = document.querySelector('form');
const imageContainer = document.querySelector('.images-container');
const searchInput = document.querySelector('.search-input');

//Add eventListener to search Form
searchFrom.addEventListener('submit',(e) =>{
    e.preventDefault();
    const inputText = searchInput.ariaValueMax.trim();
    if(inputText !== ''){
        fetchImages(inputText);
    }
    else{
        imageContainer.innerHTML = `<h2>Please enter a search Query.</h2>`
    }
})