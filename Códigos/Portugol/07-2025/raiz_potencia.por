programa
{
	inclua biblioteca Matematica --> M
	
	funcao inicio()
	{
		// atributos
		inteiro numero
		real output = 0.0
	
		escreva("Insira um número inteiro: ")
		leia(numero)
		
		se (numero == 0) {
			escreva("O número 0 não tem operações disponíveis")
		} senao se (numero > 0) {
			output = M.arredondar(M.raiz(numero, 2), 2)
		} senao {
			output = M.potencia(numero, 2)
		}

		escreva(output)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 387; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */