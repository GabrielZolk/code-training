//Você deve implementar a função calculadoraAdicaoSubtracao que recebe 3 argumentos: sendo os dois primeiros números inteiros, numero e outroNumero, e o terceiro operação, sendo uma string "+ " ou "-".

function calculadoraAdicaoSubtracao(numero, outroNumero, operacao) {
    if(operacao == "+") {
        numero + outroNumero
    } else if (operacao == "-") {
        numero - outroNumero
    } else {
        console.log("Esta calculadora apenas soma e subtrai")
    }
}