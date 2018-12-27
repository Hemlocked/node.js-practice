var http = require('http');
var server = http.createServer();
server.on ('request', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('hello world');
    res.end();
});
server.listen(8000, '127.0.0.1');
console.log("server listening ...");
