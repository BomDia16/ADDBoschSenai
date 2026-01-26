programa
{
	
	funcao inicio()
	{
		// atributos
		real peso_queijo_quilos, peso_presunto_quilos, peso_hamburguer_quilos
		real gramas_presunto = 50.0, gramas_queijo = 50.0, gramas_hamburguer = 100.0, quantidade_sanduiches, gramas_queijo_total, gramas_presunto_total, gramas_hamburguer_total 
		
		escreva("Insira a quantidade de sanduíches a se fazer: ")
		leia(quantidade_sanduiches)

		gramas_queijo_total = gramas_queijo * 2 * quantidade_sanduiches
		gramas_presunto_total = gramas_presunto * quantidade_sanduiches
		gramas_hamburguer_total = gramas_hamburguer * 2 * quantidade_sanduiches

		peso_queijo_quilos = gramas_queijo_total / 1000
		peso_presunto_quilos = gramas_presunto_total / 1000
		peso_hamburguer_quilos = gramas_hamburguer_total / 1000
		
		escreva("Queijo: " + peso_queijo_quilos + "Kg, Presunto: " + peso_presunto_quilos + "Kg, Hamburguer: " + peso_hamburguer_quilos + "Kg")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 598; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */