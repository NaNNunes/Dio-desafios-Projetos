//funcao imediata para impressao de nome
function cumprimento(){
    const now = new Date
    const hora = now.getHours()
    const saldacao = validacaoCumprimento(hora)
    return saldacao
}
function validacaoCumprimento(hora) {
    return (hora > 17 || hora < 4 ) ? 'Boa Noite' : (hora < 12) ? 'Bom dia' : 'Boa Tarde'
}

(function(){
    let nome = 'Renan'
    console.log(`${cumprimento()} ${nome}!`)
})();