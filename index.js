const express = require('express')
const app  = express()

app.get('/',(req,res)=>{
    res.status(200).json({message:'hi'})
})

app.get('/webhook',(req,res)=>{
    res.status(200).json({message:req})
})

app.listen(8000,()=>console.log("app running in 8000"))
