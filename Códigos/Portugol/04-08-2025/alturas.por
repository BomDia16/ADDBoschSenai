programa {
  // feito no Portugol WEB

  funcao inicio() {
    inteiro i
    real altura = 0, maior_altura = 0

    para(i = 1; i <= 5; i++) {
      escreva("Insira um altura: ")
      leia(altura)

      se(altura > maior_altura) {
        maior_altura = altura
      }
    }

    escreva("A maior altura é: ", maior_altura)
  }
}
