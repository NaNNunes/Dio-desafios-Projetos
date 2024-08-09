class Person {
    nome;
    idade;
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        const data = new Date()
        this.anoNascimento = (data.getFullYear()) - idade
    }
}

function comparaPeople(personOne, personTwo){
    return personOne.idade == personTwo.idade ? 'Ambos tem a mesma idade' :  personOne.idade > personTwo.idade ? personOne.nome : personTwo.nome
}

const renan = new Person('Renan', 19)
const ana = new Person('Ana Bruna', 22)

console.log(`O mais velho entre ${renan.nome} e ${ana.nome} é:\n ${comparaPeople(renan, ana)}`)