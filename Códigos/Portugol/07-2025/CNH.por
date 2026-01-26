programa
{
	
	funcao inicio()
	{
		// atributos
		logico temCNH
		cadeia perguntaTemCNH
		inteiro idade
	
		escreva("Você possui CNH? (s/n)")
		leia(perguntaTemCNH)

		escreva("Insira a sua idade: ")
		leia(idade)
		
		se (perguntaTemCNH == "s" e idade > 18) {
			temCNH = verdadeiro
			escreva("Pode dirigir")
		} senao {
			temCNH = falso
			escreva("Não pode dirigir")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 346; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */