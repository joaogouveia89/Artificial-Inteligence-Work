var express            = require('express');
var bodyParser         = require('body-parser');
var request            = require('request');
var fs                 = require('fs');
var busca              = require('./modulo-ai/busca');


var app = express();
var globalSender;
var verify_token = "vou_passar_na_materia";
var token = "EAASc98tm3XgBALdBS8T3AhsZCK2bVDVHejSmgTq3veEZCWbP9SKHhNSxfZA9RMVbatkr6Yo5fYZCLF5HQoDxTlk3jhw9kGhtA3RYg6EJNwYZBajfPZBxaXx0Ls0ZBxosKCSQy4e3paKQFx6NZCY4Ckdk3qkwPU1jRTwZCpOGiE9aNKwZDZD";
var porta = process.env.PORT || 3000;

//Processa o application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

//Processa application/json
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send('Hello world, I am a chat bot');
});

// para verificação do Facebook
app.get('/webhook/', function (req, res) {
    if (req.query['hub.verify_token'] === verify_token) {
        res.send(req.query['hub.challenge'])
    }
    res.send('Error, wrong token');
	console.log("Fim app.post");
});

app.post('/webhook/', function (req, res) {
	console.log("Início app.post");
   var base = JSON.parse(fs.readFileSync(__dirname + '/modulo-ai/dados.json', 'utf8')); //carregando a base de informações
    var messaging_events = req.body.entry[0].messaging
    for (var i = 0; i < messaging_events.length; i++) {
        console.log("Dentro do for no app.post");
		var event = req.body.entry[0].messaging[i]
        var sender = event.sender.id;
        globalSender = sender;
        if (event.message && event.message.text) {
            console.log("Dentro do if no app.post");
			var text = event.message.text;
            console.log("variável text = " + text);
			console.log("variável base = ");
			console.log(base);
			console.log("variável sender = " + sender);
			console.log("Antes de chamar a função getUserName");
			getUserName(text, base, sender);
 
        }
    }
    res.sendStatus(200)
})

app.listen(porta);

console.log("escutando no endereço localhost:" + porta);




function getUserName(text, base, sender){
    console.log("Início getUserName");
	console.log("user id = " + globalSender);
    var userData;
    var urlReq = "https://graph.facebook.com/v2.6/"+globalSender+"?fields=first_name,last_name,profile_pic,locale,timezone,gender&access_token="+token; 
    
	console.log("variável urlReq = " + urlReq);
	
    request({
       url: urlReq,
       method: 'GET',
       json: {
           recipient: {id: globalSender}
       }
    }, function(error, response, body) {
        console.log("dentro da função de retorno da requisição na getUserName");
		if(error){
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
         console.log("requisição feita e retornada com sucesso (getUserName)");
		 console.log("response: " + JSON.stringify(response));
         console.log("body: " + JSON.stringify(body));
		 
		 var nomeUsuario = body.first_name
		 var resposta = busca(text.substring(0,200).toLowerCase(), base, nomeUsuario);
		sendTextMessage(sender, nomeUsuario+", "+resposta);
    })
	
	console.log("Fim getUserName");
}

function sendTextMessage(sender, text) {
console.log("Início sendTextMessage");   
   var messageData = { text:text }
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token: token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
	console.log("Fim sendTextMessage");  
}
