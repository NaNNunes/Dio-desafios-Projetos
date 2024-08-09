//console.log('\n-----loops e strings----')
let nome = 'Renan de Souza Nunes'
for (let i in nome){
    //console.log(nome[i])
}
// -------------------------------------------------
const notas = []
let media = 0
let soma = 0

for (let i = 0; i < 3; i++){
    notas.push(Number((Math.random() * 10).toFixed(2)))
    soma += notas[i]
}

media = soma / (notas.length - 1)
console.log(`\nNotas: ${notas}`)
console.log(`Quantidade de Notas: ${notas.length}`)
console.log(`Soma de notas: ${soma.toFixed(2)}`)
console.log(`Media: ${media.toFixed(2)}\n`)


