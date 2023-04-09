import express from "express"; 
const app = express();
const PORT = 7000;

import fs from "fs";
import moment from "moment";
//const fs = require("fs");

console.log("hello");
app.post('/createFile',(req,res) => {
    const dateTime = moment().format('YYYY-MM-DD_HH-mm-ss');
    const filepath = `./files/${dateTime}`;
    const fileContent = new Date().toISOString();
    fs.writeFile(filepath, fileContent, (err) => {
        if(err) {
            console.log("Error while file creation");
        }
        else {
            console.log("file created successfully");
            res.send("file created successfully");
        }
    })
} );

app.get('/getFiles', (req, res) => {
    fs.readdir('./files',(err,files) => {
        if(err) {
            console.log("error retrieving the file");
        }
        else {
            const fileList = [];
            files.forEach((file)=> {
                fileList.push(file);
                console.log(`retrieved file - ${file}`);
            });
            res.send(fileList);
        }
    })
})

app.listen(PORT, () => {
    console.log("app listening on port ", PORT);
})

