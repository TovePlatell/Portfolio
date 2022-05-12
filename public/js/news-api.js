//const { default: axios } = require("axios");


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

window.onload = function(){
    newsType.innerHTML = "<h4>Headlines</h4>";
    fetchHeadlines();
};


generalBtn.addEventListener('click', ()=>{
    newsType.innerHTML = "<h4>General</h4>";
    fetchGeneralNews();
})

businessBtn.addEventListener('click', ()=>{
    newsType.innerHTML = "<h4>Business</h4>";
    fetchBusinessNews();
})

sportBtn.addEventListener('click', ()=>{
    newsType.innerHTML = "<h4>Sport</h4>";
    fetchSportNews();

})

techBtn.addEventListener('click', ()=>{
    newsType.innerHTML = "<h4>Tech</h4>";
    fetchTechNews();

})

entertainmentBtn.addEventListener('click', ()=>{
    newsType.innerHTML = "<h4>Entertainment</h4>";
    fetchEntertainmentNews();

})

searchBtn.addEventListener('click', ()=>{
    newsType.innerHTML = "<h4>Search : "+newsQuery.value+"</h4>";
    fetchQueryNews();

})

const fetchHeadlines = async () => {
    const response = await fetch(headlines_news+API_KEY)
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArray = myJson;
        
    }else{

        //handle errors
        console.log(response.status, response.statusText);
    
    }

    displayNews();
}

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
        console.log(myJson)
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
        console.log(myJson)
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
        console.log(myJson)
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

    if(newsQuery.value == null)
    return;

    const response = await fetch(search_news+encodeURIComponent(newsQuery.value)+"&apiKey"+API_KEY);
    newsDataArray = []; 
    
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArray = myJson.articles;
        
    }else{

        //handle errors
        console.log(response.status, response.statusText);
    
    }

    displayNews();
}

//function that display news

const displayNews = () => {

    newsDetails.innerHTML = "";


if(newsDataArray.length == 0 ) {
    newsDetails.innerHTML = "<h5> No news is found </h5>"
    return;
    }
    // console.log(newsDataArray)
   newsDataArray.articles.forEach (news => {
       if (news?.urlToImage ){

        //console.log(news)
        let date = news.publishedAt.split("T")

        let newsColumn = document.createElement('div');
        newsColumn.className = "col-sm-12 col-md-4 col-lg-3 p-2";

        let newsCard = document.createElement ('div');
        newsCard.className = "p-2";

        let image = document.createElement('img');
        image.setAttribute("height", "matchparent");
        image.setAttribute("width", "100%");

        // if 
        image.src = news.urlToImage;


        let cardBody = document.createElement('div');
        
        let newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = "news.title";

        let dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];


        let description = document.createElement('p');
        description.className = "text-muted";
        description.innerHTML = news.description;

        let link = document.createElement('a');
        link.className = "btn-btn-light"
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML = "Read more";

        
        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(description);
        cardBody.appendChild(link);

        newsCard.appendChild(image);
        newsCard.appendChild(cardBody);

        newsColumn.appendChild(newsCard);
console.log(newsDetails)
        newsDetails.appendChild(newsColumn);

       }
    })

}

//# sourceMappingURL=script.min.js.map