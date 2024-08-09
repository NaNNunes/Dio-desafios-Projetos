const {gets, print} = require('./functionsAux') // importar o que está sendo exportado

print(gets())

// object destructuring --- destruir objeto
//ex:
const pessoa = {
    nome: 'Renan',
    idade: 19,
    altura: 1.85
}

const {nome, altura} = pessoa;
console.log(pessoa)
console.log(nome)
console.log(altura)

