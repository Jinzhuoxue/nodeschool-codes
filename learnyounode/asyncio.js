const module1 = require('./module1');

const filePath = process.argv[2]
const extName =  process.argv[3]

module1(filePath, extName, function(err, filenames){
    if(err) return console.log(err);

    filenames.forEach(ele => console.log(ele))
})