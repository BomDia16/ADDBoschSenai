programa {
	//feito no Portugol WEB
  funcao inicio() {
  	// atributos
    inteiro numero_parcelas, i = 0
    real soma = 0.0, parcela = 0.0

	// numeros parcelas
    escreva("Insira a quantidade de parcelas: ")
    leia(numero_parcelas)

	// somar todas as parcelas
    enquanto(i < numero_parcelas) {
      escreva("Digite o valor da parcela: ")
      leia(parcela)

      soma += parcela
      i++
    }

	// mostrar resultado
    escreva("A soma das parcelas é de R$", soma)
  }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 430; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */