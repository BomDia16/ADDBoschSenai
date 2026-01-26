programa {
  funcao inicio() {
	// feito no Portugol WEB
  	
    inteiro contador = 1, idade

    enquanto(contador <= 5){
      escreva("Insira sua idade: ")
      leia(idade)

      se(idade >= 18) {
        escreva(idade, " anos - atingiu a maioridade\n")
      } senao{
        escreva(idade, " anos - é menor de idade\n")
      }
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