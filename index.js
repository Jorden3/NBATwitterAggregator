const express = require('express');
const fetch = require('node-fetch')
const app = express();
require('dotenv').config();

app.get('/', async (req, res)=>{
  let NBAhashtag = encodeURIComponent('#nba');
  console.log(`https://api.twitter.com/1.1/search/tweets.json?q=${NBAhashtag}`)
  try{
  let twitterRes = await fetch(`https://api.twitter.com/1.1/search/tweets.json?q=${NBAhashtag}`, {
    headers: {`authorization`: `Bearer ${process.env.BEARER_TOKEN}`}
    })
    }
    catch(e){
      console.log(e);
    }
    
 
  res.send("hello");
});
app.listen(3001, ()=>{
  console.log('listening on 3001')
});