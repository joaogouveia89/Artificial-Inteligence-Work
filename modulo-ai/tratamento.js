module.exports = function(mensagem_usuario){
  if(mensagem_usuario.indexOf("Ola") !== -1 || mensagem_usuario.indexOf("Oi") !== -1){
    respostas = [
      "Ola cara",
      "Oi amigo",
      "Ola, em que posso ajudar?",
      "Oi, posso te ajudar em algo?"
    ];
    return respostas[Math.floor(Math.random() * respostas.length)]; //aqui ele vai escolher aleatoriamente uma resposta pra mandar de volta
  }else{
    return "desculpa, não entendi";
  }
}
