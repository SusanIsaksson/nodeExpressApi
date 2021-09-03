const fs = require('fs'); 
const express = require('express');
const server = express();
const port = 3000;

server.use(express.json());

server.get('/api', (req, res) => { 
  let raw = fs.readFileSync("storage.json")
  let colorInput = JSON.parse(raw)
  res.json(colorInput) 
}) 

server.post('/api', (req, res) => {
  try {
      let raw = fs.readFileSync("storage.json")
      let colorInput = JSON.parse(raw)
      colorInput.push(req.body)
      fs.writeFileSync("storage.json", JSON.stringify(colorInput))
      res.json(true)
      
  } catch(err) {
    console.error(err)
    res.status(500).json(false)
  }
    console.log(req.body)
  

})

server.use(express.static('public'))

  
server.listen(port, () => { 

  console.log(`Min server är igång, välkommen!`) 

})