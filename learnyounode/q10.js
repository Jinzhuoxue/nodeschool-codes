const net = require('net');

const [cmd, file, port] = process.argv;
var server = net.createServer(function(socket){
    //console.log(socket.)
    let curdate = new Date();
    let month = curdate.getMonth()+1; 
    month = month>=9 ? month+1 : '0' + month;
    let formatDate = "";
    formatDate = `${curdate.getFullYear()}-${month}-${curdate.getDate()} ${curdate.getHours()}:${curdate.getMinutes()}`;

    //console.log(curdate);
    socket.write(formatDate  + '\n');
    socket.end("");
});

server.listen(port);