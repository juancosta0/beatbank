export class ContaCorrente{
    #agencia;
    #saldo = 0;
    #cliente;

    saldo(){
        return this.#saldo
    }

    sacar(valor){
        if(valor > this.#saldo){
            return;
        }
        this.#saldo -= valor;
        return true;
        
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this.#saldo += valor
        return "Valor depositado"
    }

    transferir(valor, contaDestino){
        const saqueRealidado = this.sacar(valor)
        if(saqueRealidado){
            contaDestino.depositar(valor)
            return true
        }
        return false
    }

    setCliente(cliente){
        this.#cliente = cliente;
    }
    setAgencia(agencia){
        this.#agencia = agencia
    }

}