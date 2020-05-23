const express=require('express')
const app=express()
const PORT=process.env.PORT || 4444

app.get('/',(req,res)=>{
    res.send('Hello World !!')
})

app.listen(PORT,(req,res)=>{
    console.log(`http://localhost:${PORT}`) // this allows heroku to set the port 
    // now we can write PORT=7666 node server.js then server works at server 7666
    // so you can choose any server
})