programa
{
	
	funcao inicio()
	{
		caracter letra
		cadeia tipo_letra
		
		escreva("Escreva uma letra do alfaneto: ")
		leia(letra)

		escolha(letra) {
			caso('a'):
				tipo_letra = "Vogal"
			pare
			caso('e'):
				tipo_letra = "Vogal"
			pare
			caso('i'):
				tipo_letra = "Vogal"
			pare
			caso('o'):
				tipo_letra = "Vogal"
			pare
			caso('u'):
				tipo_letra = "Vogal"
			pare
			caso contrario:
				tipo_letra = "Consoante"
			pare
		}

		escreva("É uma " + tipo_letra)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 263; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {letra, 6, 11, 5};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */