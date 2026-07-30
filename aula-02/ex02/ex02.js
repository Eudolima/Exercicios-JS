// Pergunte ao usuário qual é o dia da semana. 
let diaDaSemana = prompt("Qual o dia da semana? ");

// Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". 
// Caso contrário, mostre "Boa semana!".
let mensagem = (diaDaSemana == "domingo" || diaDaSemana == "sabado") ?
"Bom fim de semana!" : "Boa semana!"
alert(mensagem);


