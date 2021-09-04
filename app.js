const calcular = document.getElementById('calcular')

calcular.addEventListener('click', calcularIMC)
function calcularIMC() {
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const result = document.getElementById('result')
    if (nome && altura && peso !== '') {
        const valorIMC = (peso / (altura * altura))
        let resultadoIMC = ''
        if (valorIMC < 18.5) {
            resultadoIMC = 'Você está abaixo do peso!'
        } else if (valorIMC > 18.5 && valorIMC <= 24.9) {
            resultadoIMC = 'Você está no peso Normal!'
        } else if (valorIMC > 25 && valorIMC <= 29.9) {
            resultadoIMC = 'Você está com sobrepeso!'
        } else if (valorIMC > 30 && valorIMC <= 34.9) {
            resultadoIMC = 'Você está com Obesidade Grau 1!'
        } else if (valorIMC > 35 && valorIMC <= 39.9) {
            resultadoIMC = 'Você está com Obesidade Grau 2!'
        } else if (valorIMC >= 40) {
            resultadoIMC = 'Você tem obesidade morbida!'
        }
        result.textContent = `${nome} seu IMC é ${valorIMC.toFixed(2)}. ${resultadoIMC}`
     } else {
            result.textContent = 'Preencha todos os campos!'
        }
    }