require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session= require('express-session');
const axios = require('axios');

const app = express();

let{
    SERVER_PORT,
    SECRET,
    REACT_APP_DOMAIN,
    REACT_APP_CLIENT_ID,
    CLIENT_SECRET
}= process.env;

app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}))


app.listen(SERVER_PORT, ()=>{
    console.log(`Hola! de puerto ${SERVER_PORT}`)
})

