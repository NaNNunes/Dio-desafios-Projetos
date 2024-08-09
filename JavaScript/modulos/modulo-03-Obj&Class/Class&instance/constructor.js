class Person {
    nome;
    idade;

    constructor(nome, idade /*obrigatorios*/) { // == regra de instanciacao
        this.nome = nome
        this.idade = idade

        const data = new Date();
        this.anoNascimento = (data.getFullYear()) - idade // incremento
    }

    descricao(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade}`)
    }
}

const renan = new Person()
const ana = new Person('Ana Bruna', 22)
console.log(renan)
console.log(ana)