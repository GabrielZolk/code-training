//Neste desafio, a tarefa é de implementar uma função tripleThe Chances que: receba um argumento: Chances, uma array de inteiros; retorna uma array de inteiros onde cada elemento desse novo array seja o elemento do inicial multiplicado por 3; Sua implementação da funcão sera testada por um código fornecido com uma série de arquivos de entrada. Cada arquivo de entrada contem parametros para a chamada da função. A função será chamada com esses parametros e o resultado da execução sera ipressa na saida


//errado
// function tripleTheChances(chances) {
//     return chances.map(v => v * 3);
// }

// tripleTheChances(2, 4)

//certo
function tripleTheChances(chances) {
    return chances.map(chance => chance * 3)
  }

tripleTheChances([1, 2, 3, 4, 5])