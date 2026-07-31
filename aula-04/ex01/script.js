// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
let mensagem = "seja bem vindo ao curso de JS!";

// Crie uma variável chamada "nome" e atribua a ela o seu nome. 
let nome = "José";

// Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
alert(`Olá, ${nome} ${mensagem}`);

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. 
let pergunta = prompt(`${nome} qual a linguagem de programação que você mais gosta?`);

// Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
alert(`Ótima escolha ${pergunta} é uma linguagem muito versátil.`);

// Peça ao usuário para inserir sua idade com prompt. 
let suaIdade = prompt("Qual a sua idade? ");
let minima = 18;

// Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, 
let resposta = (suaIdade >= minima) ?
`Você tem ${suaIdade}, já pode votar nesta eleição.`
: `Você tem ${suaIdade}, só poderá votar na próxima eleição.`

// exibindo uma mensagem apropriada no console.
alert(resposta);

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numero = Math.random();
alert(numero);