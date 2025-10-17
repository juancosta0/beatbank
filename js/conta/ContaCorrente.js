import { Conta } from "../Conta.js";

export class ContaCorrente extends Conta {
    static #qtdContas = 0;

    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia)
        ContaCorrente.#qtdContas += 1
    }

    static get qtdContas() {
        return ContaCorrente.#qtdContas;
    }

    sacar(valor){
        let taxa = 1.1;
        super._sacar(valor, taxa)
    }
}