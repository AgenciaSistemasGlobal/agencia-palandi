var express = require('express');
var app = express();
var porta = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.listen(porta, function(){
	console.log('Rodando na porta ' + porta);
});