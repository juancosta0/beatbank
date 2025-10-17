import { Gerente } from "./funcionario/Gerente.js";
import { Diretor } from "./funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const gerente1 = new Gerente('Pedro', 147258369, 12000);
const diretor1 = new Diretor('Juan', 123456789, 17000);

diretor1.cadastrarSenha('juan123cs');
;
SistemaAutenticacao.login(diretor1, 'juan123cs')

console.log(SistemaAutenticacao.login(diretor1, 'juan123cs')
)
