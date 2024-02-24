//to know where are you "/"
const { log } = require("console")
const path =require("path")
console.log(path.sep)//"\"
//to dir in the files join to path the sum of the roods 
const arrive=path.join("/content","sub content","text.txt")
console.log(arrive);//\content\sub content\text.txt
//to see the last one in the path.
const base = path.basename(arrive);
console.log(base);//text.txt
//to take the full path 
const absloute=path.resolve(__filename,"constent","sub conntent","text.txt")
console.log(absloute);
//rember this is global 
//1-to know the file 
console.log(__dirname);//c:\Users\youssef\Desktop\new node
//2-to know where are you un this file 
console.log(__filename);//c:\Users\youssef\Desktop\new node\7-path.js