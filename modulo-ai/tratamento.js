module.exports = function(mensagem_usuario){
  if(mensagem_usuario.indexOf("Ola") !== -1 || mensagem_usuario.indexOf("Oi") !== -1){ //se a mensagem do usuário tiver Ola ou Oi ele responde com as possibilidades abaixo
    respostas = [
      "Ola cara",
      "Oi amigo",
      "Ola, em que posso ajudar?",
      "Oi, posso te ajudar em algo?"
    ];
    return respostas[Math.floor(Math.random() * respostas.length)]; //aqui ele vai escolher aleatoriamente uma resposta pra mandar de volta
  }

  if(mensagem_usuario.indexOf("voce") !== -1 && (mensagem_usuario.indexOf("sobre") || mensagem_usuario.indexOf("quem é"))){
    return "Sou um robo construido pelos alunos Joao Gouveia, Alexandre Pirfo e Ramirez Gonçalves para a disciplina de inteligencia artificial na FUMEC. Posso te ajudar com duvidas relacionadas à FUMEC e os cursos que tem la";
  }

  if(mensagem_usuario.indexOf("melhor") !== -1 && mensagem_usuario.indexOf("curso") !== -1){
    return "O melhor curso da fumec com certeza é o de ciência da computação :p";
  }
}
