// Crie um programa que percorre um lista de numeros e retorna cada numero par.
const lista = []
for (let i = 0; i < 10; i++){
    lista.push(Number((Math.random() * 10).toFixed()))
    if (lista[i] % 2 === 0){
        console.log(lista[i])
    }
}
console.log(lista)
