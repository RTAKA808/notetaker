const express = require('express');

const notesData=require('./db/db.json')
const PORT = 3001;

const app = express();

app.get('/api/notes', (req, res) => {
    // Inform the client
    res.json(`${req.method} get request`);
    res.render('notes')
  
    // Log our request to the terminal
    console.info(`${req.method} request received to get reviews`);
  });

  app.post('/api/notes', (req, res) => {
    // Inform the client that their POST request was received
    res.json(`${req.method} request received to add a review`);
    res.post('notes')
  
    // Log our request to the terminal
    console.info(`${req.method} request received to add a review`);
  });

  app.post('/api/notes', (req, res) => {
    // Inform the client that their POST request was received
    res.json(`${req.method} request received to add a review`);
    res.delete('notes')
  
    // Log our request to the terminal
    console.info(`${req.method} request received to add a review`);
  });

  app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);