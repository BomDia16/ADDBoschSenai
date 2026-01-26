programa {
  // feito no Portugol WEB

  funcao inicio() {
    inteiro x

    escreva("Insira um número: ")
    leia(x)

    parImpar(x)
  }

  funcao parImpar(inteiro x) {
    se (x == 0) {
      escreva("O número ", x, " é zero")
    } senao se (x % 2 == 0) {
      escreva("O número ", x, " é par")
    } senao {
      escreva("O número ", x, " é ímpar")
    }
  }
}
