module.exports = function(mensagem_usuario, dados){
  var resposta = "";
  var unidade;
  var curso;
  var tipoInformacao;

  // identificação da unidade desejada
  if(mensagem_usuario.indexOf("fea") !== -1){
    unidade = "fea";
  }else if(mensagem_usuario.indexOf("face") !== -1){
    unidade = "face";
  }else if(mensagem_usuario.indexOf("fch") !== -1){
    unidade = "fch";
  }

  //identificação do curso desejado
  if(unidade === "fea"){
    dados.unidades.fea.cursos.forEach(function(c){
      if(mensagem_usuario.indexOf(curso) !== -1){
        curso = c;
        break;
      }
    });
  }else if(unidade === "face"){
    dados.unidades.face.cursos.forEach(function(c){
      if(mensagem_usuario.indexOf(curso) !== -1){
        curso = c;
        break;
      }
    });
  }else if(unidade === "fch"){
    dados.unidades.fch.cursos.forEach(function(c){
      if(mensagem_usuario.indexOf(curso) !== -1){
        curso = c;
        break;
      }
    });
  }else{
    // como nao tem nenhuma unidade descrita na mensagem do usuário, o robo vai procurar em todos os cursos de todas as unidades
    dados.unidades.fea.cursos.forEach(function(c){
      if(mensagem_usuario.indexOf(curso) !== -1){
        curso = c;
        break;
      }
    });
    if(curso === undefined){
      dados.unidades.face.cursos.forEach(function(c){
        if(mensagem_usuario.indexOf(curso) !== -1){
          curso = c;
          break;
        }
      });
      if(curso === undefined){
        dados.unidades.fch.cursos.forEach(function(c){
          if(mensagem_usuario.indexOf(curso) !== -1){
            curso = c;
            break;
          }
        });
      }
    }
  }

  return "voce quer saber sobre o curso " + curso + " na unidade da " + unidade;

  //definição do tipo de informação






//   //cumprimentando o usuário
//
//   if(cumprimento(mensagem_usuario)){
//     //se a mensagem do usuário for um cumprimento...
//     return poss[Math.floor(Math.random() * poss.length)]; //aqui ele vai escolher aleatoriamente uma resposta pra mandar de volta
//   }
//
//   if(despedida(mensagem_usuario)){
//     return "Por nada, espero ter ajudado (y)";
//   }
//
//   if(mensagem_usuario.indexOf("voce") !== -1 && (mensagem_usuario.indexOf("sobre") || mensagem_usuario.indexOf("quem é"))){
//     // quando perguntam pro robô quem é ele
//     return "Sou um robo construido pelos alunos Joao Gouveia, Alexandre Pirfo e Ramirez Gonçalves para a disciplina de inteligencia artificial na FUMEC. Posso te ajudar com duvidas relacionadas à FUMEC e os cursos que tem la";
//   }
//
//   if(mensagem_usuario.indexOf("melhor") !== -1 && mensagem_usuario.indexOf("curso") !== -1 && mensagem_usuario.indexOf("fumec") !== -1){
//     return "O melhor curso da fumec com certeza é o de ciência da computação 💻";
//   }
//
//   if(mensagem_usuario.indexOf("cursos") !== -1 && mensagem_usuario.indexOf("quais") !== -1 && mensagem_usuario.indexOf("face") !== -1 && (mensagem_usuario.indexOf("disponiveis") !== -1 || mensagem_usuario.indexOf("tem") !== -1 || mensagem_usuario.indexOf("oferece") !== -1)){
//     return "A FACE oferece os cursos de ciência da computação, administração, ciências contábeis, negócios internacionais, Alem de tecnólogos, pós graduações e pós graduações";
//   }
//
//   if((mensagem_usuario.indexOf("contato") !== -1 && mensagem_usuario.indexOf("como") !== -1) || ((mensagem_usuario.indexOf("quais") !== -1 || mensagem_usuario.indexOf("qual") !== -1) && (mensagem_usuario.indexOf("telefones") !== -1 || mensagem_usuario.indexOf("telefone") !== -1))){
//     return "Para falar diretamente com a FUMEC, ligue para o telefone 3228-3000"
//   }
//
//   unidade = filtraUnidade(mensagem_usuario);
//
// }
//
// function cumprimento(mensagem_usuario){
//   // verifica através de uma expressão regular se a frase começa com oi ou ola
//   if(/^oi/i.test(mensagem_usuario) || /^ola/i.test(mensagem_usuario)){
//     return true;
//   }
//   return false;
// }
//
// function despedida(mensagem_usuario){
//   if(mensagem_usuario.indexOf("obrigado") !== -1 || mensagem_usuario === "valeu"){
//     return true;
//   }
//   return false;
// }
//
// function filtraUnidade(mensagem_usuario){
//   var resp;
//   if(mensagem_usuario.indexOf("face") !== -1){
//     resp = "face";
//   }
}
