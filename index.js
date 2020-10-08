const express = require('express');
const fetch = require('node-fetch')
const app = express();
require('dotenv').config();

app.get('/', async (req, res)=>{
  let NBAhashtag = encodeURIComponent('#nba')
  let twitterRes = fetch(`https://api.twitter.com/1.1/search/tweets.json?q=`+NBAhashtag, {
    headers: `authorization: Bearer ${process.env.BEARER_TOKEN}`
 
  res.send("hello");
});
app.listen(3001, ()=>{
  console.log('listening on 3001')
});