// Crie uma mensagem que informa o usuário sobre o saldo da conta, 
// usando uma template string para incluir o valor do saldo.
let saldoConta = 1000;
let deposito = 500;
let novoSaldo = saldoConta + deposito;
let saldoAtual = `Seu saldo antes do depósito era de ${saldoConta}, 
após o depósito de ${deposito}, seu saldo atual passou a a ser de ${novoSaldo}.`;

alert(saldoAtual);
