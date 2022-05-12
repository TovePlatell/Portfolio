//  const express = require('express')
//  const newsr = express.Router()
//  const axios = require('axios')
// // const moment = require('moment')
// // const math = require('math')


// newsr.get('/views/news-site.ejs', async(req, res) => {
// try{
//     let url = 'http://newsapi.org/v2/top-headlines?' +
//     'country=us&' +
//     'apiKey=1be4f4a0b46c42e2b71f0902a6b2b2b0';

//     const news_get = await axios.get(url)
//     res.render('news',{articles:news_get.data.articles})
// } catch (error) {
//     if(error.response){
//         console.log(error)
//     }

// }
// });

// newsr.post('/search', async(req, res) => {
//     const search = req.body.search
//     console.log(req.body.search)
// })


// newsr.get

// module.exports=newsr