export class Funcionario{
    #nome;
    #cpf;
    #salario;
    #senha;
    _bonificacao;

    constructor(nome, cpf, salario){
        this.#nome = nome;
        this.#cpf = cpf;
        this.#salario = salario;
        this._bonificacao = 1;
    }

    cadastrarSenha(senha){
        this.#senha = senha;
    }
    get senha(){
        return this.#senha;
    }

    autenticar(senha){
        if(this.#senha == senha){
            return true
        }
        else{
            return false
        }
    }
}