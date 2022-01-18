var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.use(express.static(__dirname + '/dist/rcodefirst-front'));

var porta = process.env.PORT || 3000;

app.get('/*', (req,res) =>  res.sendFile(__dirname + '/dist/rcodefirst-front/index.html'));

const server = http.createServer(app);

server.listen(porta,() => console.log('Rodando...'));