const fs = require("fs");

fs.readFile('tempFile.txt', 'utf8', (err, data)=> {
    if(err){
        console.log(err);
    } else {
        data = data.replace(/\s+/g,' ').trim();
        fs.writeFile('tempFile.txt', data, (err) => {
            if(err) console.log(err);
            else console.log("Removed extra spaces successfully!")
        });
    }
})