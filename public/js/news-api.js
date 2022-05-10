
const getBtn = document.querySelector('#get-btn');
const postBtn = document.querySelector('#post-btn');

// const get = {
//   method: 'GET',
//   url: 'https://community-hacker-news-v1.p.rapidapi.com/updates.json',
//   params: {print: 'pretty'},
//   headers: {
//     'X-RapidAPI-Host': 'community-hacker-news-v1.p.rapidapi.com',
//     'X-RapidAPI-Key': 'd6f1c9888fmsh271612787447db1p171585jsnafd64e0a32cb'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


const getData = ()=>{
   axios.get('https://guardianmikilior1v1.p.rapidapi.com/getSingleItem').then(response => {

       console.log(response)
   });  
};
 
const sendData = ()=>{}
 

getBtn.addEventListener('click', getData)
postBtn.addEventListener('click', sendData)