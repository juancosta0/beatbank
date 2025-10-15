import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente('Juan', 123456);
const cliente2 = new Cliente('Pedro', 654321); 

const contaCorrente1 = new ContaCorrente(1052, cliente1);
const contaCorrente2 = new ContaCorrente(1052, cliente2);

contaCorrente1.depositar(1800);

console.log(contaCorrente1.saldo)

contaCorrente1.transferir(800, contaCorrente2);


console.log(contaCorrente1.saldo)
console.log(contaCorrente2.saldo)

console.log(ContaCorrente.qtdContas)
