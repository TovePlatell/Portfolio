
const darkMode = () => {
    const date = new Date();
    const hour = date.getHours();

    if(hour >= 7 && hour <= 19){
        document.body.style.backgroundColor = 'whitesmoke';
        document.body.style.color = 'black'
    }

    else{

        document.body.style.backgroundColor = '#1c1d25'
        document.body.style.color = 'white';

    }
}
window.addEventListener('load', darkMode);

input.addEventListener('keydown', (event) => {
    if(event.key === 'Enter')
    loadImage();
})


class photoGallery{
    constructor(){
    this.API_KEY = '563492ad6f917000010000013f814e23972e4212a409926251033267';
    this.containerDIv = document.querySelector('.container')
    this.searchForm = document.querySelectorAll('.search-box');
    this.eventHandle();
}

eventHandle(){
    document.addEventListener('DOMContentLoaded', () => {
        this.getImage();
    });
}
 async getImage(){
    const baseUrl = 'https://api.pexels.com/v1/curated?per_page=12';
    const data = await this.fetchImages(baseUrl);
    this.GenerateHTML(data.photos)
    console.log(data)
 
    }

  async fetchImages(baseUrl){
        const response = await fetch (baseUrl, {
            method: 'GET', 
            headers:{
                Accept:'application/json',
                Authorization: this.API_KEY
                }
            });
            const data = await response.json();
            return data;
            console.log(data)
            
    }
    GenerateHTML(photos){
        photos.forEach(photo => {
            const item = document.createElement('div');
            item.classList.add('grid');
            item.innerHTML = `
            <a href="#">
            <img src="${photo.src.medium}">
            </a>
            `;
            this.containerDIv.appendChild(item);
            
        });

    }
}


const gallery = new photoGallery;



// const input = document.querySelector('#input');
// const grid = document.querySelector('.grid');
// [0];


// const loadImage = () => {
//   removeImages();
 
//   const url = "https://api.pexels.com/v1/search?query=nature&per_page=9"

//   fetch(url)


// .then(response =>{
   
// })}

// const removeImages = () => {
//     grid.innerHTML = '';
// }

