/*
    #Crie uma classe para representar pessoas#
    Para cada pessoa tem-se, nome, peso e altura.
    Retorne IMC
*/

class Person{
    nome; peso; altura;
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura
    }
    calculoImc(){
        return (this.peso / Math.pow(this.altura, 2)).toFixed(2)
    }
    classeImc(){
        const imc = this.calculoImc()
        return imc < 18.5 ? 'Baixo Peso' : imc < 25 ? 'Normal' : imc < 30 ? 'Sobrepeso' : imc < 35 ? 'Obesidade' : 'Obesidade Morbida'
    }
    descricao(){
        return `Nome: ${this.nome}; Peso: ${(this.peso).toFixed(2)} kg; Altura: ${this.altura} m; \n-> IMC: ${this.calculoImc()}; Classificação: ${this.classeImc()}\n`
    }
}

const renan = new Person('Renan', 66, 1.85)
console.log(renan.descricao())
const ana = new Person('Ana Bruna', 50.1, 1.65)
console.log(ana.descricao())