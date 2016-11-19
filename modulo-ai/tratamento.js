module.exports = function(mensagem_usuario){
  if(mensagem_usuario.indexOf("ola") !== -1 || mensagem_usuario.indexOf("oi") !== -1){ //se a mensagem do usuário tiver Ola ou Oi ele responde com as possibilidades abaixo
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
    return "O melhor curso da fumec com certeza é o de ciência da computação 8|";
  }

  if(mensagem_usuario.indexOf("cursos") !== -1 && mensagem_usuario.indexOf("quais") !== -1 && mensagem_usuario.indexOf("face") !== -1 && (mensagem_usuario.indexOf("disponiveis") !== -1 || mensagem_usuario.indexOf("tem") !== -1)){
    return "A face oferece os cursos de: \n ciência da computação administração \n ciências contábeis \n negócios internacionais \n Alem de tecnólogos, pós graduações e pós graduações";
  }
}
