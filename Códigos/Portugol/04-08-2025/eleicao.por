programa {
  // feito no Portugol WEB

  funcao inicio() {
    inteiro i, voto, total_duck = 0, total_grilo = 0, total_branco = 0, total_nulo = 0

    para(i = 1; i <= 20; i++) {
      escreva("11 - Duck\n")
      escreva("22 - Grilo\n")
      escreva("33 - Voto em Branco\n")
      escreva("Insira o número da pessoa em que queira votar: ")
      leia(voto)
      escreva("-----------------------------------\n")

      se(voto == 11){
        total_duck++
      } senao se(voto == 22) {
        total_grilo++
      } senao se (voto == 33) {
        total_branco++
      } senao {
        total_nulo++
      }
    }

    escreva("---------Apuração Final---------\n")
    escreva("Total de votos contabilizados: ", i, "\n\n")

    escreva("Resultados por Candidato:\n")
    escreva("Duck (11): ", total_duck, " votos\n")
    escreva("Grilo (22): ", total_grilo, " votos\n")
    escreva("Em Branco (33): ", total_branco, " votos\n")
    escreva("Nulos: ", total_nulo, " votos\n")

    se (total_duck > total_grilo) {
      escreva("Candidato Duck venceu a eleição")
    } senao se(total_duck < total_grilo) {
      escreva("Candidato Grilo venceu a eleição")
    } senao {
      escreva("Ir para 2° turno")
    }
  }
}
