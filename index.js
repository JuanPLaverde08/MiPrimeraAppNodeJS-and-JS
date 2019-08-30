const express=require('express');
const app= express();

app.get('/',(req,res) =>{
    res.end('Works!');
});

app.listen(3000);