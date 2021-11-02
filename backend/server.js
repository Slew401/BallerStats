const express = require("express");
const fetch = require("node-fetch"); 
const app = express();
const port = 3030;



app.get('/' , (req, res) => {
    res.send('Hello, World Express!!')
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})

const headers = {
    'x-rapidapi-host': 'nba-player-individual-stats.p.rapidapi.com',
    'x-rapidapi-key': '6e009c2a9amsh074604bd5f4bf85p1222d5jsne72d4a262676'
}

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
  });

app.get("/newEP", (req,res) => {
    res.send("hello, BallerStats")
})

app.get('/SRteams', async (request, response) => {
    const api_url = "http://api.sportradar.us/nba/trial/v7/en/games/6d2c3191-8604-4026-84d3-32f36d042a8e/pbp.json?api_key=dtvarwvtj66mk932j3m3cta4";
    const fetchRes = await fetch(api_url);
    const json = await fetchRes.json();
    response.send(json); 
}); 

