const fs = require('fs');
const path = require('path');

const dirPath = process.argv[2];
const extName = process.argv[3];

if(dirPath && extName){
    fs.readdir(dirPath, (err, filelist) => {
        if (err) return console.error(err);
        filelist.forEach(item => {
            if(path.extname(item) && path.extname(item).indexOf(extName) != -1){
                console.log(item);
            }
        });
    })
}