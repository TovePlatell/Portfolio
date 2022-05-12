
const express = require('express');
const app = express();
const port = 3001


//static files

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/images', express.static(__dirname + 'public/images'))

//set views

app.set('views', './views')
app.set('view engine', 'ejs');

//templating
app.get('/', (request, response) => {
    response.render('index');
    
})

app.get('/schoolprojects', (request, response) => {
    response.render('schoolprojects');
    
})

app.get('/news-site', (request, response) => {
    response.render('news-site');
    
});

// app.use(express.urlencoded({ extended: true }));
// app.use('/',require('./routes/news'))

// app.get("/", (request, response) =>{
//     response.sendFile(__dirname + '/public/pages/index.html')
 
// })

// app.get("/scoolprojects", (request, response) =>{
//     response.sendFile(__dirname + '/public/pages/schoolprojects.html')
 
// })

// app.get("/news", (request, response) =>{
//     response.sendFile(__dirname + '/public/pages/news-site.html')
 
// })

//set Views





 //Route

app.listen(port, () =>
    console.log(`Listening on port ${port}`));

 