const accessKey = 'RhCGX3unFQf4a7VgTL1faPUv4kenbaFJ9TH5v6VgqBw';

const searchFrom = document.querySelector('form');
const imageContainer = document.querySelector('.images-container');
const searchInput = document.querySelector('.search-input');
const loadMoreBtn = document.querySelector('.loadMoreBtn');

let page = 1;

//Function to fetch images using Unflash AIP
const fetchImages = async (query, pageNo) =>{
    if(pageNo === 1){
        imageContainer.innerHTML = '';
    }
     
    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=28&page=${pageNo}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);

    data.results.forEach((photo) => {
        //creating Image Div
        const imageElement = document.createElement('div');
        imageElement.classList.add('imageDiv');
        imageElement.innerHTML = `<img src="${photo.urls.regular}"/>`;
        
        //creating OverLay element
        const overlayElement = document.createElement('div');
        overlayElement.classList.add('overlay');
        
        //creating overlay Text
        const overlayText = document.createElement('h3');
        overlayText.innerText = `${photo.alt_description}`;

        overlayElement.appendChild(overlayText);
        imageElement.appendChild(overlayElement);
        imageContainer.appendChild(imageElement);
    });
} 

//Add eventListener to search Form
searchFrom.addEventListener('submit',(e) =>{
    e.preventDefault();
    const inputText = searchInput.value.trim();
    if(inputText !== ''){
        page = 1;
        fetchImages(inputText, page);
    }
    else{
        imageContainer.innerHTML = `<h2>Please enter a search Query.</h2>`
    }
})

//Add eventListener to Load more button to fetch more images
loadMoreBtn.addEventListener('click', ()=>{
    fetchImages(searchInput.value.trim(),++page);
})
