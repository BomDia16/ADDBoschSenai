programa {
  // feito no Portugol WEB

  inclua biblioteca Util --> u

  funcao inicio() {
    inteiro sim[10][10]

    para(inteiro i = 0; i < 10; i++) {
      para(inteiro j = 0; j < 10; j++) {
        sim[i][j] = u.sorteia(0, 100)
        escreva(sim[i][j], "\t")
      }
      
      escreva("\n")
    }
  }
}
