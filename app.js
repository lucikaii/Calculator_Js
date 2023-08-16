'use strict'

const botaoSomar = document.getElementById('somar')
const botaoVerificar = document.getElementById('verificar')

function somar(){
    const numberOne = Number(document.getElementById('numberone').value)
    const numberTwo = Number(document.getElementById('numbertwo').value)
    const resultado = document.getElementById('resultado')
    const verificacao = document.getElementById('verificado')


    const total = numberOne + numberTwo

    resultado.textContent = total
}
function verificar(){
    const numero = Number(document.getElementById('number').value)

    if (numero > 0){
        verificacao.textContent = 'Positivo'
    } else if (numero < 0){
        verificacao.textContent = 'Negativo'
    }else{
        verificacao.textContent = 'Zero'
    }
}
botaoSomar.addEventListener('click', somar)
botaoVerificar.addEventListener('click', verificar)