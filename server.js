var http = require('http');
var number = require('./settings');
var server = http.createServer();
server.on ('request', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('hello world');
    res.end();
});
server.listen(number.port, number.host);
console.log("server listening ...");
