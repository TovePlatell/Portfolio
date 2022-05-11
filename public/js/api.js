
const darkMode = () => {
    const date = new Date();
    const hour = date.getHours();

    if(hour >= 7 && hour <= 19){
        document.body.style.backgroundColor = 'whitesmoke';
        document.body.style.color = 'black'
    }

    else{

        document.body.style.backgroundColor = '#1c1d25'
        document.body.style.color = 'grey';

    }
}
window.addEventListener('load', darkMode);

input.addEventListener('keydown', (event) => {
    if(event.key === 'Enter')
    loadImages(event);
    
})


const hamburgerButton = document.querySelector('#hamburger')
const navList = document.querySelector('#nav-list');

const toggleButton = () => {
    navList.classList.toggle('show')
}


class photoGallery{
    constructor(){
    this.API_KEY = '563492ad6f917000010000013f814e23972e4212a409926251033267';
    this.containerDIv = document.querySelector('.gallery-container')
    this.searchForm = document.querySelector('.header form')
    this.loadMore = document.querySelector('.load-more')
    this.logo = document.querySelector('logo')
    this.pageIndex = 1;
    this.searchValueGlobal = '';
    this.eventHandle();
}

eventHandle(){
    document.addEventListener('DOMContentLoaded', () => {
        this.getImage(1);
    });
    this.searchForm.addEventListener('submit', (e)=>{
        this.pageIndex = 1;
        this.getSearchedImages(e)
    });
    this.loadMore.addEventListener('click',(e)=>{
        this.loadMoreImages(e);
    });

    this.logo.addEventListener('click', ()=>{
        this.pageIndex = 1;
        this.containerDIv.innerHTML = '';
        this.getImage(this.pageIndex);
    })
}


 async getImage(index){
    this.loadMore.setAttribute('data-image', 'curated');
    const baseUrl = `https://api.pexels.com/v1/curated?page=${index}&per_page=12`;
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
    async getSearchedImages(e){
        this.loadMore.setAttribute('data-image', 'search');
        e.preventDefault();
        this.containerDIv.innerHTML = '';
        const searchValue = e.target.querySelector('input').value;
        this.searchValueGlobal = searchValue;
        const baseURL = `https://api.pexels.com/v1/search?query=${searchValue}&page=1&per_page=12`;
        const data = await this.fetchImages(baseURL);
        this.GenerateHTML(data.photos);
        e.target.reset();
    }

    async getMoreSearchedImages(index){
        const baseURL = `https://api.pexels.com/v1/search?query=${this.searchValueGlobal}&page=${index}&per_page=12`;
        const data = await this.fetchImages(baseURL);
        console.log(data)
        this.GenerateHTML(data.photos);
    }

     async loadMoreImages (e){
    let index = ++this.pageIndex;
    const loadMoredata = await e.target.getAttribute('data-image')
    if(loadMoredata === 'curated'){
    //load page 2 for curated
    this.getImage(index)
    }else{
        //load page 2 for search
        this.getMoreSearchedImages(index);
    }
} 

}


const gallery = new photoGallery;


