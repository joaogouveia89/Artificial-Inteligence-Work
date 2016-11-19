var express =           require('express');
var bodyParser =        require('body-parser');
var request =           require('request');


var app = express();
var token = "vou_passar_na_materia";
var porta = process.env.PORT || 3000;

//Processa o application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

//Processa application/json
app.use(bodyParser.json());


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// para verificação do Facebook
app.get('/webhook/', function (req, res) {
    if (req.query['hub.verify_token'] === token) {
        res.send(req.query['hub.challenge'])
    }
    res.send('Error, wrong token')
})
app.listen(porta, function(porta){
  console.log("escutando no endereço localhost:" + porta);
});
