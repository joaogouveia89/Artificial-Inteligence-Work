# Artificial-Inteligence-Work
## Auto Instrucional feito para a materia de  Inteligencia Artificial, ministrada pelo professor Luiz, no segundo semestre de 2016
## Alunos: João Gouveia, Alexandre Pirfo e Ramirez Gonçalves

## Para editar o trabalho

* Crie uma conta no site <a href="http://www.c9.io" target="_blank">C9</a> e me mande por whatsapp seu usuário de la para eu poder te adicionar no workspace onde tem o trabalho

## Criar lógicas

* Você vai editar somente o arquivo que está localizado em "modulo-ai/tratamento.js", la fica toda a lógica de respostas do robo,
se voce quiser criar mais arquivos para ficar mais organizados, voce deve chama-lo dentro desse arquivo tratamento.js, senão
sua lógica nao será analisada

* Voce pode criar somente uma reposta fixa ou um array com possibilidades de reposta, caso queira uma resposta fixa, simplesmente
a retorne em formato de string

Exemplo:

`return "Ola sou um robo";`

Ou caso queira um array com varias possibilidades faça:

` var resps = ["Ola cara", "Oi, em que posso ajudar", "Oi", "Ola"];
  return resps[Math.floor(Math.random() * resps.length)]; `

## Para enviar alterações

depois que voce acabou de criar suas lógicas e deseja testar elas, voce vai precisar apertar no botão "+" que fica embaixo da tela no C9
e escolher "New terminal", depois digite no terminal os comandos:

` git add . `

depois

` git commit -m"mensagem"` onde mensagem voce coloca uma mensagem qualquer falando o que voce alterou ou acrescentou no trabalho

depois

`git push origin master`

depois

`git push heroku master`

Depois do termino dos comandos seu codigo esta pronto para ser testado, aí é só entrar na pagina do FB que eu mandei por whatsapp e testar

caso algum comando acima relacionados ao git nao funcione me fale que aí precisaremos criar uma conta no github tb

qualquer duvida podem me chamar pelo whatsapp
