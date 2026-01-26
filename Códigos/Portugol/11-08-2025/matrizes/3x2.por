programa {
	// feito no Portugol WEB
	
  funcao inicio() {
    real sim[3][2]
    real num

    para(inteiro i = 0; i < 3; i++) {
      para(inteiro j = 0; j < 2; j++) {
        escreva("Insira um número real: ")
        leia(num)
        sim[i][j] = num
      }
    }

    para(inteiro i = 0; i < 3; i++) {
      para(inteiro j = 0; j < 2; j++) {
        escreva(sim[i][j], "\t")
      }

      escreva("\n")
    }
  }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 36; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */