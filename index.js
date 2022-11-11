/* capire in quale oggetto di request è contenuto il json che vi arriva dal browser
quale metodo di JSON utlilizzare per fare: let oggettojs=JSON.?(oggetto punto 1) */
const express=require("express");
const app=express();
app.use(express.json())
app.post('/utente',(request,response)=>{
    //stampo obj json
    let oggetto = request.body
    console.log(oggetto)
    //obj json to stringa
    let str = JSON.stringify(oggetto)
    console.log(str)
    //str to obj json: JSON.parse
})

app.listen(8080,()=>{console.log("Express is working...")})