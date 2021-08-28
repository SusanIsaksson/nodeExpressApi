const fs = require('fs');  
const express = require('express');
const server = express();
const port = 3000;

server.use(express.json());

server.get('/', (req, res) => { 

    res.json('TESTAR GET') 

}) 

server.post('/', (req, res) => {
    console.log(req.body)
    res.json('POST')

})

server.use(express.static('public'))

  
server.listen(port, () => { 

  console.log(`Min server är igång, välkommen!`) 

})