require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const axios = require('axios');

const app = express();

let {
    SERVER_PORT,
    SECRET,
    REACT_APP_DOMAIN,
    REACT_APP_CLIENT_ID,
    CLIENT_SECRET,
    CONNECTION_STRING
} = process.env;

massive(CONNECTION_STRING).then(db=>{
    app.set('db',db)
})

//'db' and db are a key:value pair. 
//.set is to store the info for later

app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}))

app.get('/auth/callback', async (req, res) => {
    let payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
    }
    // post request with code for token
    let tokenRes = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload);
    // use token to get user data
    let userRes = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${tokenRes.data.access_token}`)
    // console.log("test:", userRes.data)

    const db=req.app.get('db');
    let {email,sub,picture,name}=userRes.data;
    let foundCustomer = await db.find_customer([sub]);
    
    if(foundCustomer[0]){
        req.session.user=foundCustomer[0]
        
    }else{
        let createCust= await db.create_customer([name,sub,picture,email])
        req.session.user=createCust[0]
        
    }
    res.redirect('/#/confidential')
})

app.post('/api/auth/logout', (req,res)=>{
    req.session.destroy();
    res.status(200).send();
})




app.listen(SERVER_PORT, () => {
    console.log(`Hola! de puerto ${SERVER_PORT}`)
})

