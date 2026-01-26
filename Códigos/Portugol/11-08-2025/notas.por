programa {
  // feito no Portugol WEB

  funcao inicio() {
    // atributos
    cadeia nome[6] = {"Cauba", "Dedas", "Ongos", "Thor", "Hulk", "Stati"}
    inteiro i
    inteiro nota[6] = {0, 5, 6, 7, 8, 10}

    para(i = 0; i < 6; i++) {
      se(nota[i] >= 7) {
        escreva("Aluno ", nome[i], ": Aprovado\n")
      } senao se(nota[i] < 7) {
        escreva("Aluno ", nome[i], ": Reprovado\n")
      }
    }
  }
}
