const express = require('express');
const fetch = require('node-fetch');
const app = express();
require('dotenv').config();

app.get('/', async (req, res)=>{
  let NBAhashtag = encodeURIComponent('#nba');
  let results = encodeURIComponent('popular');
  console.log(`https://api.twitter.com/1.1/search/tweets.json?q=${NBAhashtag}&result_type=${results}`);
  try{
    let twitterRes = await fetch(`https://api.twitter.com/1.1/search/tweets.json?q=${NBAhashtag}`, {
      headers: {authorization : `Bearer ${process.env.BEARER_TOKEN}`}
    });
    let twitterJson = await twitterRes.json();
    res.send(twitterJson);
    }
    catch(e){
      console.log(e);
    }
    
 
  
});
app.listen(3001, ()=>{
  console.log('listening on 3001');
});