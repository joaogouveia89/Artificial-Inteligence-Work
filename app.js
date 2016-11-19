var express =           require('express');
var bodyParser =        require('body-parser');
var request =           require('request');


var app = express();
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
    res.send('Error, wrong token')
});

app.post('/webhook/', function (req, res) {
    let messaging_events = req.body.entry[0].messaging
    for (let i = 0; i < messaging_events.length; i++) {
        let event = req.body.entry[0].messaging[i]
        let sender = event.sender.id
        if (event.message && event.message.text) {
            let text = event.message.text
            sendTextMessage(sender, "Text received, echo: " + text.substring(0, 200))
        }
    }
    res.sendStatus(200)
})

app.listen(porta);

console.log("escutando no endereço localhost:" + porta);




function sendTextMessage(sender, text) {
    let messageData = { text:text }
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
}
