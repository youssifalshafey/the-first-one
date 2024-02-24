// const fs=require("fs");//
// const newFs=fs.readFileSync;//
// const newFss=fs.writeFileSync;//
// or you can call the function you want;
const fs=require("fs")
// const readFile=readFileSync('./content/first.txt','utf8')
// console.log(readFile);
const path=require("path");
// ti write new things in the new file .
// to read the File.
// const newReadFile=readFileSync('./content/youssif','utf8');
// console.log(newReadFile);
//you can also read the file look like that.//this is the raight way........>.
// const pathFile=path.join(__dirname,"content","first.txt");
// fs.readFile(pathFile,'utf8',(err,content)=>{
//     if (err) throw err;
//     console.log(content);
// })
//you can also make the file in node.
// const dirPath=path.join(__dirname,"Youssif");
// fs.mkdir(dirPath,(err)=>{
//     if (err) throw err;
//     console.log('you did it .');
// })
//this way you can whrite the file
// fs.writeFile(path.join("content","first.txt"),"hello world i can do any thing i want",(err)=>{
//     if (err) throw err;
//     console.log("done");
// })

const first = fs.readFileSync(path.join("content","second.txt"),'utf8');
const write=fs.writeFileSync(path.join("content","second.txt"),`hello i can say ${first} `,{flag : 'a'});
