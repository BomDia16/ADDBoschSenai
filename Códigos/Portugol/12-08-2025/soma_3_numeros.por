programa {
  funcao inicio() {
    inteiro num1, num2, num3

    escreva("Insira um número inteiro: ")
    leia(num1)

    escreva("Insira um outro número inteiro: ")
    leia(num2)

    escreva("Insira mais um número inteiro: ")
    leia(num3)

    escreva("A soma é ", somar(num1, num2, num3))
  }

  funcao inteiro somar(inteiro num1, inteiro num2, inteiro num3) {
    retorne num1 + num2 + num3
  }
}
