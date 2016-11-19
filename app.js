var express =           require('express');


var app = express();
var token = "vou_passar_na_materia";
var porta = process.env.PORT || 3000;




app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/webhook', function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === token) {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);
  }
});



app.listen(porta);
console.log("escutando no endereço localhost:" + porta);
