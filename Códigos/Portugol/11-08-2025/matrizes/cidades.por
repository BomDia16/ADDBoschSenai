programa {
  // feito no Portugol WEB

  funcao inicio() {
    inteiro sim[5][5] = {
      {0, 15, 30, 05, 12},
      {15, 00, 10, 17, 28},
      {30, 10, 0, 3, 11},
      {5, 17, 3, 0, 80},
      {12, 28, 11, 80, 0}
    }
    inteiro i, j

    escreva("Escreva o número da primeira cidade: ")
    leia(i)
    i--

    escreva("Escreva o número da segunda cidade: ")
    leia(j)
    j--

    escreva("A distância entre as cidades é ", sim[i][j])
  }
}
