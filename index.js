const express = require('express')
require('dotenv').config()
const app  = express()

app.use(express.json())

const CLIENT_KEY = 'awv18ts4lyvq2ygw'


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

app.get('/auth/callback',(req,res)=>{
    console.log("req",req)
    res.status(200).json({message: req.query})
})

app.get('/login', (req, res) => {
    const csrfState = Math.random().toString(36).substring(2);
    res.cookie('csrfState', csrfState, { maxAge: 60000 });

    let url = 'https://www.tiktok.com/auth/authorize/';

    url += `?client_key=${CLIENT_KEY}`;
    url += '&scope=user.info.basic,video.list';
    url += '&response_type=code';
    url += '&redirect_uri=https://tiktok-schedular.vercel.app/webhook/auth/callback';
    url += '&state=' + csrfState;

    res.redirect(url);
})


app.listen(8000,()=>console.log("app running in 8000"))
