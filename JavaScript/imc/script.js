alert('Preencha os campos para obter resultados')
function envio(){
    let peso = document.querySelector('input#txtpeso')
    let altura = document.querySelector('input#txtaltura')
    let imc = peso.value / ((altura.value/100) * (altura.value/100))
    let sectionRes = document.getElementsByTagName('section')[1]
    let resultado = document.querySelector('p#resultado')
    let baixo = document.querySelector('div#baixo')
    let normal = document.querySelector('div#normal')
    let sobrepeso = document.querySelector('div#sobrepeso')
    let obesidade = document.querySelector('div#obesidade')
    let morbido = document.querySelector('div#morbido')
    let status = document.querySelector('p#status')
    
    function validacao(nomeMedida ,valorMedida){
        if(!valorMedida){
            window.alert(`[erro] valor em ${nomeMedida} não válido`)
        }
    }
    validacao('peso', peso.value)
    validacao('altura', altura.value)

    resultado.style.font = 'bold 1.2rem times'
    resultado.innerHTML = `IMC = <span style="font-weight: 700;">${imc.toFixed(2)}</span>`
    
    baixo.style.backgroundColor = 'hsl(200, 20%, 50%)'
    normal.style.backgroundColor = 'hsl(80, 20%, 50%)'
    sobrepeso.style.backgroundColor = 'hsl(60, 20%, 50%)'
    obesidade.style.backgroundColor = 'hsl(30, 20%, 50%)'
    morbido.style.backgroundColor = 'hsl(0, 20%, 50%)'

    status.style.font = 'normal 1.2rem arial'

    if(imc < 18.5){
        baixo.style.backgroundColor = 'rgb(0, 150, 255)'
        sectionRes.style.borderColor = 'rgb(0, 150, 255)'
        status.innerHTML = 'Baixo Peso'
    }
    else if(imc < 25){
        normal.style.backgroundColor = 'rgb(170, 255, 0)'
        sectionRes.style.borderColor = 'rgb(170, 255, 0)' 
        status.innerHTML = 'Normal'
    }
    else if(imc < 30){
        sobrepeso.style.backgroundColor = 'yellow'
        sectionRes.style.borderColor = 'yellow'
        status.innerHTML = 'Sobrepeso'
    }
    else if(imc < 35){
        obesidade.style.backgroundColor = 'orange'
        sectionRes.style.borderColor = 'orange'
        status.innerHTML = 'Obesidade'
    }
    else {
        morbido.style.backgroundColor = 'red'
        sectionRes.style.borderColor = 'red'
        status.innerHTML = 'Obesidade Morbida'
    }
    
}