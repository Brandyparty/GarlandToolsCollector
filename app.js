//const http = require('http');
//const fs = require('fs');
import * as  http from 'http';
import * as  fs from 'fs';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function(request, response) {
    console.log(request.url);
    response.setHeader("Content-Type", "text/html");
    let path = './';
    switch (request.url) {
        case '/':
            path += 'garlandtoolscollector.html';
            response.statusCode = 200;
            break;
        case '/main.js':
            response.setHeader("Content-Type", "text/javascript");
            path += 'main.js';
            response.statusCode = 200;
            break;    
        default:
            path += 'garlandtoolscollector.html';
            response.statusCode = 200;
            break;
    } 

    fs.readFile(path, function (err, data) {
        if (err) {
            console.log(err);
            response.end();
        } else {
            response.write(data);
            response.end();
        }
    }); 
      
})

server.listen(port, 'localhost', () => {

})


/*
fs.readFile('./garlandtoolscollector.html', function (err, html) {

    if (err) throw err;    

    
});
*/