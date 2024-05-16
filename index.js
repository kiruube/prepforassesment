const express = require('express');
const app = express();

const port = 3008;


app.get('/', (req,res)=>{
    res.send("Welcome to our Home Page!");
});







app.get('*', (req,res) =>{
    res.send("404! Page does not exist!")
});

app.listen(port, () => console.log(`Listening on ${port}`));
