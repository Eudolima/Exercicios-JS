// Crie um sistema de pontuação para um jogo. 
// Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". 
// Caso contrário, mostre "Tente novamente para ganhar."

let numero = prompt("Digite um número: ");
let maximo = 100;

let pontuacao = (numero >= maximo) 
? `Parabens, você atingiu ${numero} pontos!` 
: `Tente novamente para ganhar, você fez apenas ${numero} pontos.`;

alert(pontuacao);