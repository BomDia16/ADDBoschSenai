programa {
  // feito no Portugol WEB

  funcao inicio() {
    inteiro i, total_m = 0, total_f = 0
    caracter sexo

    para(i = 1; i <= 5; i++) {
      escreva("Insira o valor do seu sexo (M para masculino ou F para feminino): ")
      leia(sexo)

      escolha (sexo) {
        caso 'M':
          total_m++
        pare
        caso 'F':
          total_f++
        pare
        caso contrario:
          escreva("Insira um valor válido\n")
          i--
      }
    }

    escreva("Total do sexo masculino: ", total_m)
    escreva("\nTotal do sexo feminino: ", total_f)
  }
}
