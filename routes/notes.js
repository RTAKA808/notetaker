const notes=require('express').Router();

const { readFromFile, readAndAppend, readAndDelete } = require('../helpers/fsUltils');
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
            id: uuid()
        };

    readAndAppend(newNote, './db/notes.json');
    res.json(`note added successfully`)
    }else{
    res.error('error adding note')
    }
    
});
//req and res are objects
notes.delete('/:id',(req,res)=>{
    
    console.info(`${req.method} request received`);
    console.log(req.params.id);

    readAndDelete(req.params.id,'./db/notes.json');
    res.json('note deleted successfully')


})

module.exports=notes;