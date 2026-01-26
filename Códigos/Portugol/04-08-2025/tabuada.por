programa {
  // feito no Portugol WEB

  funcao inicio() {
    inteiro i, numero

    escreva("Insira um número inteiro: ")
    leia(numero)

    para(i = 1; i <= 10; i++) {
      escreva(numero, " X ", i, " = ", i * numero, "\n")
    }
  }
}
