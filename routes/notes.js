const notes=require('express').Router();

const { readFromFile, readAndAppend } = require('../helpers/fsUltils');

const uuid = require('../helpers/uuid');

notes.get('/', (req,res)=> {
    console.info(`${req.method} request received for notes`)
    readFromFile('.db/notes.json').then((data)=> res.json(JSON.parse(data)));

})