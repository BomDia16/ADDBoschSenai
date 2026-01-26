programa {
	// feito no Portugol WEB
	
  funcao inicio() {
    inteiro sim[3][3] = {
                          {2, 4, 6}, 
                          {8, 10, 12},
                          {14, 16, 18}
                        }
	inteiro soma

    para(inteiro i = 0; i < 3; i++) {
    	soma = 0
      para(inteiro j = 0; j < 3; j++) {
        soma += sim[j][i]
      }

      escreva(soma, "\n")
    }
  }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 368; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */