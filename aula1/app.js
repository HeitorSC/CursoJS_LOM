// Implementar a função que retorna o maior número de um array
function maiorNumero(array) {
  // Verifica se o array está vazio
  if (array.length === 0) {
    return undefined;
  }

  // Inicializa a variável maior com o primeiro elemento do array
  let maior = array[0];

  // Percorre o array a partir do segundo elemento
  for (let i = 1; i < array.length; i++) {
    // Se o elemento atual for maior que o maior encontrado até agora, atualiza maior
    if (array[i] > maior) {
      maior = array[i];
    }
  }

  // Retorna o maior número encontrado
  return maior;
}

console.log(maiorNumero([1, 2, 3, 4, 5])); // Deve retornar 5
// Implementar uma funcão que imprima o nome passado com as letras em cada linha
function imprimeNome(nome) {
  // Verifica se o nome é uma string
  if (typeof nome !== 'string') {
    return undefined;
  }

  // Percorre cada letra do nome
  for (let i = 0; i < nome.length; i++) {
    // Imprime a letra atual
    console.log(nome[i]);
  }
}
console.log(imprimeNome('Lucas')); // Deve imprimir L, u, c, a, s em linhas separadas
