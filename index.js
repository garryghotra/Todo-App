const express= require('express');
const port= 7890;

const app = express();

app.listen(port, function(err){
    if(err){
        console.log(`There is an error ${err}`); return;
    }
    console.log(`The server is up and running on the port : ${port}`);
});