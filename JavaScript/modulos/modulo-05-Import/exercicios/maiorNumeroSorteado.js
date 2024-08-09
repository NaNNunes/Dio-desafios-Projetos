/* 
    Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 a 100.
    Faça um programa que recebe os 5 numeros sorteados para os alunos e mostre o maior numero sorteado.
*/

const {gets, print} = require('../functionsAux');

const qtdAlunos = gets()
let maiorValor = 0
for (let i = 0; i < qtdAlunos; i++){
    valorSorteado = gets()
    valorSorteado > maiorValor ? maiorValor = valorSorteado : maiorValor = maiorValor
}
print(maiorValor)