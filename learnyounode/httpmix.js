/*const http = require('http')
const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

let buffer1;
let buffer2;
let buffer3;
let count=1;

let printBuffer = (i) => {
    if(count === i){
        console.log(buffer1.toString());
        console.log(buffer2.toString());
        console.log(buffer3.toString());
    }else{
        count++;
    }
}
http.get(url1, response => {
    response.setEncoding('utf-8')
    response.on('data', (data) => {
        buffer1 = buffer1 ? Buffer.concat([buffer1, new Buffer(data)]) : new Buffer(data);
        //console.log(buffer1.toString());
    }).on('end', () => {
        printBuffer(3);
    })
})

http.get(url2, response => {
    response.setEncoding('utf-8')
    response.on('data', (data) => {
        buffer2 = buffer2 ? Buffer.concat([buffer2, new Buffer(data)]) : new Buffer(data);
        //console.log(buffer1.toString());
    }).on('end', () => {
        printBuffer(3);
    })
})

http.get(url3, response => {
    response.setEncoding('utf-8')
    response.on('data', (data) => {
        buffer3 = buffer3 ? Buffer.concat([buffer3, new Buffer(data)]) : new Buffer(data);
        //console.log(buffer1.toString());
    }).on('end', () => {
        printBuffer(3);
    })
})*/


var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (var i = 0; i < 3; i++) {
  httpGet(i)
}

