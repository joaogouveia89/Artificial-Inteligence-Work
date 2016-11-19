module.exports = function(mensagem_usuario){
  var resposta = "";

  //cumprimentando o usuário

  if(mensagem_usuario.indexOf("ola") === 0 || mensagem_usuario.indexOf("oi") === 0){

    //se a mensagem do usuário começar com Ola ou Oi ele responde com as possibilidades abaixo
    poss = [
      "Ola, em que posso ajudar? ",
      "Oi, em que posso ajudar? ",
    ];
    return poss[Math.floor(Math.random() * poss.length)]; //aqui ele vai escolher aleatoriamente uma resposta pra mandar de volta
  }

  if(mensagem_usuario.indexOf("voce") !== -1 && (mensagem_usuario.indexOf("sobre") || mensagem_usuario.indexOf("quem é"))){
    // quando perguntam pro robô quem é ele
    return "Sou um robo construido pelos alunos Joao Gouveia, Alexandre Pirfo e Ramirez Gonçalves para a disciplina de inteligencia artificial na FUMEC. Posso te ajudar com duvidas relacionadas à FUMEC e os cursos que tem la";
  }

  if(mensagem_usuario.indexOf("melhor") !== -1 && mensagem_usuario.indexOf("curso") !== -1 && mensagem_usuario.indexOf("face") !== -1){
    return "O melhor curso da fumec com certeza é o de ciência da computação 8|";
  }

  if(mensagem_usuario.indexOf("cursos") !== -1 && mensagem_usuario.indexOf("quais") !== -1 && mensagem_usuario.indexOf("face") !== -1 && (mensagem_usuario.indexOf("disponiveis") !== -1 || mensagem_usuario.indexOf("tem") !== -1 || mensagem_usuario.indexOf("oferece") !== -1)){
    return "A FACE oferece os cursos de ciência da computação, administração, ciências contábeis, negócios internacionais, Alem de tecnólogos, pós graduações e pós graduações";
  }

  if((mensagem_usuario.indexOf("contato") !== -1 && mensagem_usuario.indexOf("como") !== -1) || ((mensagem_usuario.indexOf("quais") !== -1 || mensagem_usuario.indexOf("qual") !== -1) && mensagem_usuario.indexOf("telefones") !== -1)){
    return "Para falar diretamente com a FUMEC, ligue para o telefone 3228-3000"
  }
  if(mensagem_usuario.indexOf("obrigado") === (mensagem_usuario.length -  9) || mensagem_usuario.indexOf("valeu") === (mensagem_usuario.length - 6)){
    return "Por nada, espero ter ajudado (y)";
  }
}
