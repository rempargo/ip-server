var express = require('express');
var app = express();

app.set('title', 'ip-server');

app.use('/',function(req,res){
 	req.setEncoding('utf8');
	res.set('Content-Type', 'text/plain');
	res.end(req.ip);
})
app.listen(3100);
