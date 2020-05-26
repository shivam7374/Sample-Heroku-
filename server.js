const express=require('express')
const{ db, Tasks}=require('./db')

const app=express()
const PORT=process.env.PORT || 4444

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello World !!')
})
app.get('/tasks',async (req,res)=>{
    res.send(await Tasks.findAll())
})

app.post('/tasks',async (req,res)=>{
    res.send(await Tasks.create(req.body))
})
db.sync({alter:true}).then(()=>{

    app.listen(PORT,(req,res)=>{
        console.log(`http://localhost:${PORT}`) // this allows heroku to set the port 
        // now we can write PORT=7666 node server.js then server works at server 7666
        // so you can choose any server
    })
})