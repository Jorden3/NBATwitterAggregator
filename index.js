const express = require('express');
const fetch = require('node-fetch')
const app = express();
require('dotenv').config();

app.get('/', async (req, res)=>{
  //let twitterRes = fetch()
  res.send(process.env.BEARER_TOKEN);
});
app.listen(3001, ()=>{
  console.log('listening on 3001')
});