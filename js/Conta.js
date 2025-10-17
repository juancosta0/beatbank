export class Conta {

    #saldo = 0;
    #cliente;
    #agencia;
    #saldoInicial;

    constructor(saldoInicial, cliente, agencia) {
        this.#saldo = saldoInicial;
        this.#cliente = cliente;
        this.#agencia = agencia;
        if(this.construtor == Conta){
            throw new Error("Essa classe não deveria ser instanciada");
            
        }

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

        throw new Error("Esse é um metodo abstrato");
        

    }

    _sacar(valor, taxa) {
        let valorSacado = taxa * valor
        if (valor > 0 && typeof valor === 'number') {
            if (valorSacado <= this.saldo) {
                this.#saldo -= valorSacado
                return true
            }
        } else {
            return;
        }
    }

    depositar(valor) {
        if (valor > 0 && typeof valor === 'number') {
            this.#saldo += valor;
        }
    }

    transferir(contaDestino, valor) {

        const valorTrans = this.sacar(valor)
        if (valorTrans) {
            contaDestino.depositar(valor)
        }

    }
    set cliente(cliente) {
        if (cliente instanceof Cliente) {
            this.#cliente = cliente;

        }
    }


}