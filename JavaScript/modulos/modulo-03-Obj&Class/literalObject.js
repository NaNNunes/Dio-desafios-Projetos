// Objeto literal == Coleção dinamica de chave e valor.
    // dinâmico == moldavel [incremento e decremento]
    // metodos(funcoes) e atributos(variaveis)

let person = {
    nome: 'Renan',
    idade: 19,
    descricao(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}
person.descricao()

// Dinamico
    console.log('\n-------- dinâmico --------')
    // incremento
    console.log('--- Incremento ---')
    person.altura = 1.85
    person.aMais = function(){
        console.log(`E tenho ${this.altura}m`)
    }
    person.aMais()
    console.log(person)

    //decremento
    delete person.aMais
    console.log('--- DECREMENTO ---')
    console.log(person)

// Acesso --- notacao
    console.log('-------- Notações --------')
    // notacao de colecao === acesso dinamico / sintaxe dinamica
    let pesquisarNome = 'nome'
    console.log(person[pesquisarNome])
    // notacao de ponto === acesso direto
    console.log(person.idade)