programa {
  funcao inicio() {
	// feito no Portugol WEB
  	
    inteiro contador = 1
    cadeia nome, sobrenome, nome_completo

    enquanto(contador <= 5){
      escreva("Insira seu nome: ")
      leia(nome)

      escreva("Insira o seu sobrenome: ")
      leia(sobrenome)

      nome_completo	= nome + " " + sobrenome
      escreva("Nome completo: ", nome_completo, "\n")
      contador++
    }
  }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 56; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */