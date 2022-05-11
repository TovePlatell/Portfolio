
const generalBtn = document.querySelector('#general');
const businessBtn = document.querySelector('#business');
const sportBtn = document.querySelector('#sport');
const techBtn = document.querySelector('#tech');
const entertainmentBtn = document.querySelector('#entertainment');
const searchBtn = document.querySelector('#searchBtn');

const newsQuery = document.querySelector('#newsQuery');
const newsType = document.querySelector('#newsType');
const newsDetails = document.querySelector('#newsDetails');

//Array

let newsDataArray = [];

//apis

const API_KEY = '1be4f4a0b46c42e2b71f0902a6b2b2b0';
const headlines_news = 'https://newsapi.org/v2/top-headlines?country=se&apiKey=';
const general_news = 'https://newsapi.org/v2/top-headlines?country=se&category=general&apiKey=';
const business_news = 'https://newsapi.org/v2/top-headlines?country=se&category=business&apiKey=';
const sport_news = 'https://newsapi.org/v2/top-headlines?country=se&category=sports&apiKey=';
const tech_news = 'https://newsapi.org/v2/top-headlines?country=se&category=technology&apiKey=';
const entertainment_news = 'https://newsapi.org/v2/top-headlines?country=se&category=entertainment&apiKey=';
const search_news = 'https://newsapi.org/v2/everything?q=';


generalBtn.addEventListener('click', ()=>{
    
    fetchGeneralNews();
})

businessBtn.addEventListener('click', ()=>{

    fetchBusinessNews();
})

sportBtn.addEventListener('click', ()=>{

    fetchSportNews();

})

techBtn.addEventListener('click', ()=>{

    fetchTechNews();

})

entertainmentBtn.addEventListener('click', ()=>{
    fetchEntertainmentNews();

})

searchBtn.addEventListener('click', ()=>{
    fetchQueryNews();

})

const fetchGeneralNews = async () => {
    const response = await fetch(general_news+API_KEY)
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArray = myJson;
        
    }else{

        //handle errors
        console.log(response.status, response.statusText);
    
    }

    displayNews();
}

const fetchBusinessNews = async () => {
    const response = await fetch(business_news+API_KEY)
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArray = myJson;
        
    }else{

        //handle errors
        console.log(response.status, response.statusText);
    
    }

    displayNews();
}

const fetchSportNews = async () => {
    const response = await fetch(sport_news+API_KEY)
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArray = myJson;
        
    }else{

        //handle errors
        console.log(response.status, response.statusText);
    
    }

    displayNews();
}


const fetchTechNews = async () => {
    const response = await fetch(tech_news+API_KEY)
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArray = myJson;
        
    }else{

        //handle errors
        console.log(response.status, response.statusText);
    
    }

    displayNews();
}

 const fetchEntertainmentNews =  async () => {
    const response = await fetch(entertainment_news+API_KEY)
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson)
        newsDataArray = myJson;
        
    }else{

        //handle errors
        console.log(response.status, response.statusText);
    
    }

    displayNews();
}

const fetchQueryNews = async () => {
    const response = await fetch(search_news+newsQuery.value+"&apiKey"+API_KEY);
    newsDataArray = []; 
    
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
  
        
    }else{

        //handle errors
        console.log(response.status, response.statusText);
    
    }

    displayNews();
}