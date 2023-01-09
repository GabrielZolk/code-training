// Neste desafio, você deve implementar a função vezesLetraAparece, que: • recebe 2 parâmetros: frase, que deve ser uma string e letra outra string; • retorne o número de vezes que letra aparece na frase

function vezesLetraAparece(frase, letra) {

    let vezes = 0

    for (let i = 0; i < frase.length; i++) {
        const elemento = frase[i]
        if(elemento == letra) {
           vezes++
        }
        
    }
    return vezes;
}

