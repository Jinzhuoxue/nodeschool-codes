const http = require('http');
const fs = require('fs');

const [p1, p2, port, filePath] = process.argv;

const listener = function(request, response){
    res.writeHead(200, { 'content-type': 'text/plain' })
    fs.createReadStream(filePath).pipe(response);
}

const server = http.createServer(listener);
server.listen(port);