export class SistemaAutenticacao{
    static isAutenticavel(autenticavel){
        return 'autenticar' in autenticavel && autenticavel.autenticar instanceof Function
    }

    static login(autenticavel, senha){
        if(SistemaAutenticacao.isAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha)
        }
    }
}