programa {
  // feito no Portugol WEB

  funcao inicio() {
    inteiro i, num
    const inteiro FLAG = 5

    para(i = 1; i <= FLAG; i++) {
      escreva("Insira um número: ")
      leia(num)

      se(num > 0) {
        escreva("O número é positivo\n")
      } senao se(num < 0) {
        escreva("O número é negativo\n")
      } senao {
        escreva("O número é o zero\n")
      }
    }
  }
}
