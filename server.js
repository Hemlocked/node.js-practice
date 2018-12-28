var http = require('http');
var fs = require('fs');
var number = require('./settings');
var server = http.createServer();
var template = fs.readFileSync(__dirname + '/hello.ejs', 'utf-8');
var ejs = require('ejs');
var n = 0;

server.on ('request', function(req, res) {
    n++;
    var data = ejs.render(template, {
        title: "hello",
        content: "<strong>World!</strong>",
        n: n
    });
	res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
});
    
server.listen(number.port, number.host);
console.log("server listening ...");
