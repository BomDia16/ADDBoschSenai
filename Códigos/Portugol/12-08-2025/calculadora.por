programa {
  // feito no Portugol WEB
  funcao inicio() {
    inteiro opcao
    real x, y
    logico continuar = verdadeiro

    enquanto(continuar) {
      escreva("Insira o primeiro número: ")
      leia(x)

      escreva("Insira o segundo número: ")
      leia(y)

      escreva("1) Somar\n")
      escreva("2) Subrair\n")
      escreva("3) Multiplicar\n")
      escreva("4) Dividir\n")
      escreva("5) Sair\n")
      escreva("Insira uma opção: ")
      leia(opcao)

      escolha(opcao) {
        caso 1:
          escreva("O resultado é ", somar(x, y))
        pare
        caso 2:
          escreva("O resultado é ", subtrair(x, y))
        pare
        caso 3:
          escreva("O resultado é ", multiplicar(x, y))
        pare
        caso 4:
          se(y == 0){
            escreva("Não é possível dividir por zero\n")
          } senao {
            escreva("O resultado é ", dividir(x, y))
          }
        pare
        caso 5:
          escreva("Até mais")
          continuar = falso
        pare
        caso contrario:
          escreva("Insira um valor válido")
        pare
      }
    }
  }

  funcao real somar(real x, real y) {
    retorne x + y
  }

  funcao real subtrair(real x, real y) {
    retorne x - y
  }

  funcao real multiplicar(real x, real y) {
    retorne x * y
  }

  funcao real dividir(real x, real y) {
    retorne x / y
  }
}
