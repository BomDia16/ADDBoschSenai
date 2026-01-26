programa
{

	inclua biblioteca Matematica --> M
	
	funcao inicio()
	{
		// atributos
		real altura_pessoa, sombra_pessoa, altura_predio, sombra_predio

		escreva("Insira os dados em metros")
		escreva("Insira a sua altura: ")
		leia(altura_pessoa)

		escreva("Insira o tamanho da sua sombra: ")
		leia(sombra_pessoa)

		escreva("Insira o tamanho da sombra do prédio: ")
		leia(sombra_predio)

		altura_predio = (altura_pessoa * sombra_predio) / sombra_pessoa
		altura_predio = M.arredondar(altura_predio, 2)

		escreva("A altura do prédio é de " + altura_predio + " metros")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 568; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */