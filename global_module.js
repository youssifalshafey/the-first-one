const value = 15;
if (value<=10){
    console.log("small number");
}else{
    console.log("bigger number");
}

console.log(__filename); //NAme of the file
console.log(__dirname);//Dirctory the file
setInterval(()=>{
    console.log("heelo");
},1000)// that will display on the screen after one sec;


setTimeout(()=>{
    console.log("arrr");

},2000)//that will disply on the screen for one time and will display after 1 sec;
