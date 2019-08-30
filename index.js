const express=require('express');
const app= express();

/*app.get('/',(req,res) =>{
    res.end('Works !');
});*/

app.use(express.static('public'));

app.listen(3000, ()=>{
    console.log('El servidor se inició');
});