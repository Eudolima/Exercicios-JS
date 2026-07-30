// Verifique se um número digitado pelo usuário é positivo ou negativo.
let numeroDigitado = prompt("Digite um número: ");
let numero = (numeroDigitado >= 0) 
? `O número ${numeroDigitado} é positivo` 
: `O número ${numeroDigitado} é negativo.`

// Mostre um alerta informando.
alert(numero);
