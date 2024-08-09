// Class === definicao de um objeto
// instancia === ocorrencia de objeto

class Person {
    nome;
    idade;
    descricao(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

let object = renan = new Person() // === instanciacao;
object.nome = 'Renan'; 
renan.idade = 19;
object.descricao();

const ana = new Person();
ana.nome = 'Ana Bruna';
ana.idade = 22;
ana.descricao();

