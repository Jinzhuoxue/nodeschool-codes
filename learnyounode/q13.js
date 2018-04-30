const http = require('http');
const url = require('url');

const [p1, p2, port, filePath] = process.argv;

const parseTime = function(dt){
    let newDate = new Date(dt);
    return {
        hour : newDate.getHours(),
        minute : newDate.getMinutes(),
        second : newDate.getSeconds()
    };
}

const unixTime = function(dt){
    let newDate = new Date(dt);
    return {
        unixtime : newDate.getTime()
    };
}

const listener = function(req, res){
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const reqURL = url.parse(req.url, true);

    console.log(result);
    if(req.method=='GET' && reqURL.pathname=='/api/parsetime'){
        res.end(JSON.stringify(parseTime(reqURL.query.iso)));
    }else if(req.method=='GET' && reqURL.pathname=='/api/unixtime'){
        res.end(JSON.stringify(unixTime(reqURL.query.iso)));
    }else{
        res.end("");
    }
}

const server = http.createServer(listener);
server.listen(port);