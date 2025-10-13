import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente('Juan', 123456);
const cliente2 = new Cliente('Pedro', 654321); 

const contaCorrente1 = new ContaCorrente();
const contaCorrente2 = new ContaCorrente();

contaCorrente1.agencia = 1052;
contaCorrente1.cliente = cliente1;

contaCorrente2.agencia = 1052;
contaCorrente2.cliente = cliente2;

contaCorrente1.depositar(1800);

console.log(contaCorrente1.saldo)

contaCorrente1.transferir(800, contaCorrente2);


console.log(contaCorrente1.saldo)
console.log(contaCorrente2.saldo)
