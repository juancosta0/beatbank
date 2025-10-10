import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente;
const cliente2 = new Cliente;

cliente1.setAll('Juan', 123456);
cliente2.setAll('Pedro', 654321);

const contaCorrente1 = new ContaCorrente();
const contaCorrente2 = new ContaCorrente();

contaCorrente1.setAgencia(1052);
contaCorrente1.setCliente(cliente1);

contaCorrente2.setAgencia(1052);
contaCorrente2.setCliente(cliente2);

contaCorrente1.depositar(1800);

console.log(contaCorrente1.saldo())

contaCorrente1.transferir(800, contaCorrente2);


console.log(contaCorrente1.saldo())
console.log(contaCorrente2.saldo())
