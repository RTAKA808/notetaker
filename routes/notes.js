const notes=require('express').Router();

const { readFromFile, readAndAppend } = require('../helpers/fsUltils');
const uuid = require('../helpers/uuid');

notes.get('/', (req,res)=> {
    console.info(`${req.method} request received for notes`)
    readFromFile('./db/notes.json').then((data)=> res.json(JSON.parse(data)));
})

notes.post('/',(req,res)=>{
    console.info(`${req.method} request received`);
    console.log(req.body);

    const{title, text}=req.body

    if(title && text) {
        const newNote={
            title,
            text,
            note_id: uuid()
        };

    readAndAppend(newNote, './db/notes.json');
    res.json(`note added successfully`)
    }else{
    res.error('error adding note')
    }
    
});

module.exports=notes;