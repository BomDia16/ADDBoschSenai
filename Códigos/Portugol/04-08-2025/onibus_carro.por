programa {
  // feito no Portugol WEB

  funcao inicio() {
    inteiro i, opcao, total_onibus = 0, total_carro = 0
    const inteiro PESSOAS = 7

    para(i = 1; i <= PESSOAS; i++) {
      escreva("1. Ônibus\n")
      escreva("2. Carro\n")
      escreva("Insira o número correspondente do veículo que utiliza: ")
      leia(opcao)

      se(opcao == 1) {
        total_onibus++
      } senao se(opcao == 2) {
        total_carro++
      } senao {
        escreva("Insira um valor válido\n")
        i--
      }
    }

    escreva("Total de pessoas que usam ônibus: ", total_onibus)
    escreva("\nTotal de pessoas que usam carro: ", total_carro)
  }
}
