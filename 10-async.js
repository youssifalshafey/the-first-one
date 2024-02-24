//this is the a-sync.js
        const {readFile,writeFile}=require("fs");
        readFile('./content/first.txt','utf8',(err,result)=>{
            if(err) {
                console.log(err);
                return ;
            }
            const first=result;

        readFile('./content/second.txt','utf8',function(err,result){
            if (err){
                console.log(err);
                return;
            }
            const seconde=result;

        writeFile('./content/Newresukt a-sync',`the result is ${first} and ${seconde}`,(err,result)=>{
        if (err) throw err;
        console.log(result);
        })
             })
                 })