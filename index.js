const express=require("express");
const app=express();
app.use(express.json()) // for parsing application/json
// app.post('/utente/:nome/:cognome',(request,response)=>{
//   let user={firstName:request.params.nome,lastName:request.params.cognome}
​
// })
app.post('/utente',(request,response)=>{
  console.log(request)
 // fare il parsing del json e "tradurlo"in oggetto js
// e poi fare il contrario per metterlo nella risposts
})
app.listen(8080,()=>{console.log("Express is working...")})