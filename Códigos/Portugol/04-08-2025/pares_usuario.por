programa {
  // feito no Portugol WEB

  funcao inicio() {
    inteiro i, inicio, fim

    escreva("Insira o valor inicial do intervalo: ")
    leia(inicio)

    escreva("Insira o valor final do intervalo: ")
    leia(fim)

    se(inicio >= fim) {
      escreva("Escreva um valor final maior que o valor inicial")
    }

    para(i = inicio; i <= fim; i++) {
      se (i % 2 == 0) {
        escreva(i, "\n")
      }
    }
  }
}
