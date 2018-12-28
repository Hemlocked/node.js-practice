'use strict';

var http = require('http');
var fs = require('fs');
var setting = require('./settings');
var server = http.createServer();
var template = fs.readFileSync(__dirname + '/bbs.ejs', 'utf-8');
var ejs = require('ejs');
var qs = require('querystring');
var posts = [];

function renderForm(posts, res) {
	var data = ejs.render(template, {
		posts: posts
	});
		res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
}

server.on ('request', function(req, res) {
	if (req.method === 'POST') {
		req.data = "";
		req.on("readable", function() {
			req.data += req.read();
		});
		req.on("end", function() {
            var query = qs.parse(req.data);
            posts.push(query.name);
            renderForm(posts, res);
		});
	} else {
		renderForm(posts, res);
	}
});
    
server.listen(number.port, number.host);
console.log("server listening ...");
