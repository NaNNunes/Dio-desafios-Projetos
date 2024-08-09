/*
    #Crie uma classe para representar carros#
    Os carros possuem marca, cor e um gasto médio de combustivel por KM rodado.
    Crie um metodo que dado a quantidade de kms e o preco do compbustivel,
     retorne o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    consumo;
    constructor(marca, cor, consumo){
        this.marca = marca;
        this.cor = cor;
        this.consumo = consumo;
    }
    descricao(){
        console.log(`Marca: ${this.marca}; \nCor: ${this.cor}; \nConsumo: ${this.consumo} l/Km`)
    }
    gastoPercurso(kilometro, precoCombustivel){
        return (kilometro * this.consumo * precoCombustivel).toFixed(2)
    }
}
const fusion = new Carro('Ford', 'titanium', 1/8)
fusion.descricao()
console.log(`Gastos previstos R$ ${fusion.gastoPercurso(20, 6)}`)
