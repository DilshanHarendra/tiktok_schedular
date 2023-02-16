const express = require('express')
const app  = express()
app.use(express.json())
app.get('/',(req,res)=>{
    res.status(200).json({message:'hi'})
})

app.get('/webhook',(req,res)=>{
    res.status(200).json({message: req.query})
})

app.post('/webhook',(req,res)=>{
    console.log("body",req.body)
    res.status(200).json({message: req.body})
})

app.listen(8000,()=>console.log("app running in 8000"))
