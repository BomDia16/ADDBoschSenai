programa {
  // feito no Portugol WEB
  funcao inicio() {
    real x, y

    escreva("Insira um número: ")
    leia(x)

    escreva("Insira outro número: ")
    leia(y)

    menorzin(x, y)
  }

  funcao menorzin(real x, real y) {
    se (x < y) {
      escreva("O número ", x, " é o menor")
    } senao se (x > y) {
      escreva("O número ", y, " é o menor")
    } senao {
      escreva("Os números são iguais")
    }
  }
}
