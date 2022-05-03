
const express = require ('express');
const api = express();

api.use(express.static(__dirname + '/src/public/'));


api.listen(3001, () =>{
    console.log("api is up an running");
});

// api.get('/', (req, res) => {
// res.send("hello");
// }); 