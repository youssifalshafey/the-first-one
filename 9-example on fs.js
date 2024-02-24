//readfile in js
/* 
to read the file in js you must do this things.
1-create the require first {
ex :- require ("fs"). if you want fs (file system ).
}
2-make the file you want to read.
3-coding 
*/
//1-make the library who you want.
const fs=require("fs");
const path =require("path")
//2- make the who you want to read.
//3-coding
const pathFILE=path.join(__dirname,"newPath","subPath","text.txt");
fs.readFile(pathFILE,'utf8',(err,data)=>{
    if (err) throw err;
    console.log(data)
})

//if you want to make a folder in node.js
//first make the path 
const dirPath=path.join(__dirname,"newPath","newFolder");
fs.mkdir(dirPath,(err)=>{
    if(err) throw err;
    console.log("it's done");
})
