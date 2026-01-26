programa {
  // feito no Portugol WEB
  inclua biblioteca Matematica --> m

  funcao inicio() {
    inteiro i, pessoas = 0, chopes = 0, coberturas = 0
    const real CHOPP = 8.5, PIZZA = 40.0, COBERTURA = 1.5
    real total, garcom

    para(i = 3; i <= 5; i++) {
      escreva("|------------  COMANDA ", i, " ------------|\n")
      escreva("Pedido da mesa ", i,"\n")
      escreva("Pessoas na mesa: ")
      leia(pessoas)

      escreva("Quantos chopes: ")
      leia(chopes)

      escreva("Quantas coberturas: ")
      leia(coberturas)

      total = (CHOPP * chopes) + (COBERTURA * coberturas) + PIZZA
      garcom = total * 0.1

      escreva("|-----------------------------------|\n")
      escreva("Valor da conta: R$", m.arredondar(total, 2), "\n")
      escreva("10% do garçom: R$", m.arredondar(garcom, 2), "\n")
      escreva("Quantidade de pessoas: ", pessoas, "\n")
      escreva("Valor por pessoa: R$", m.arredondar(((total + garcom)/pessoas), 2),  "\n")
    }
  }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 458; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */