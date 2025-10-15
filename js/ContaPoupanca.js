import { Cliente } from "./Cliente";

export class ContaPoupanca {
    #saldo = 0;
    #cliente;
    #agencia;
    #saldoInicial;

    constructor(saldoInicial, cliente, agencia) {
        this.#saldoInicial = saldoInicial
        this.#saldo = saldoInicial;
        this.#cliente = cliente;
        this.#agencia = agencia;
    }

    get saldo() {
        return this.#saldo;
    }
    get cliente() {
        return this.#cliente;
    }
    get agencia() {
        return this.#agencia;
    }
    get saldoInicial() {
        return this.#saldoInicial;
    }

    sacar(valor) {
        if (valor > 0 && typeof valor === 'number') {
            if (valor <= this.saldo) {
                this.saldo -= valor
                return true
            }
        } else {
            return;
        }
    }

    depositar(valor) {
        if (valor > 0 && typeof valor === 'number') {
            this.saldo += valor
        }
    }

    transferir(contaDestino, valor) {

        const valorTrans = this.sacar(valor)
        if (valorTrans) {
            contaDestino.depositar(valor)
        }

    }
    set cliente(cliente) {
        if (typeof cliente == Cliente) {
            this.#cliente = cliente;

        }
    }


}