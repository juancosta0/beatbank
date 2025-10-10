export class Cliente{
    #nome;
    #cpf;

    getNome(){
        return this.#nome;
    }

    getCpf(){
        return this.#cpf;
    }

    setAll(nome, cpf){
        this.#cpf = cpf;
        this.nome = nome;
    }
    
}