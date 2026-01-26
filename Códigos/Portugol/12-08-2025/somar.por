programa {
  funcao inicio() {
    inteiro num1, num2

    escreva("Insira um número inteiro: ")
    leia(num1)

    escreva("Insira um outro número inteiro: ")
    leia(num2)

    escreva("A soma é ", somar(num1, num2))
  }

  funcao inteiro somar(inteiro num1, inteiro num2) {
    retorne num1 + num2
  }
}
