const fs = require('fs');
const path = require('path')

module.exports = (folder,extName,cb) => {
    if(folder) {
        fs.readdir(folder,
                    (err, content) => {
                        if(err) return cb(err)

                        let files = content.filter(item => {
                            return path.extname(item) === '.' + extName
                        })
                        
                        cb(null, files)
                    });
    }
}
