const http = require('http');
const fs = require('fs');
const map = require('through2-map');

const [p1, p2, port, filePath] = process.argv;

const listener = function(req, res){
    
    console.log(req);
    if(req.method=='POST'){
        req.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase();
          })).pipe(res)
    }
}

const server = http.createServer(listener);
server.listen(port);