const fs = require('fs'); 
const { response } = require('express'); 
const express = require('express');
const server = express();
const port = 3000;

server.use(express.json());

server.get('/api', (req, res) => { 
  let raw = fs.readFileSync("storage.json")
  let storageItem = JSON.parse(raw)

  res.json(storageItem) 

}) 

server.post('/api', (req, res) => {
    console.log(req.body)
    res.json('POST')

})

server.use(express.static('public'))

  
server.listen(port, () => { 

  console.log(`Min server är igång, välkommen!`) 

})