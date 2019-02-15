const express = require('express');
const app = express();
var fs = require('fs');
const request = require('request');

app.use(express.static("Laborator10"))

app.get('/', function(req, res)
{
	res.send('Hello!');
});

app.get('/read-file', function(req, res)
{
	fs.readFile('Text.txt','utf8',function(err,contents){ 
 		res.send(contents);
 	});
});

app.get('/mysite', function(req, res)
{
	res.sendfile('mysite.html');
});

app.get('/API',function(req, res){
  request('https://jsonplaceholder.typicode.com/todos/',{json: true},(err, res, body)=> {
    if(err)
    	{ return console.log(err);}
    console.log(body.url);
    console.log(body.explanation);
    res.send("Rendering file");
  });
});


app.listen(5000, function()
{
	console.log('App listen on port 5000!');
});