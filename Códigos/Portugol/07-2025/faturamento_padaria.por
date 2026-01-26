programa
{
	inclua biblioteca Matematica --> M
	
	funcao inicio()
	{
		// atributos
		inteiro paes_vendidos, broas_vendidas
		real faturamento_paes, faturamento_broas, faturamento_total, caixa_rendimento

		escreva("Insira a quantidade de paes vendidos: ")
		leia(paes_vendidos)

		escreva("Insira a quantidade de broas vendidos: ")
		leia(broas_vendidas)

		faturamento_paes = paes_vendidos * 0.12
		faturamento_broas = broas_vendidas * 1.5

		faturamento_total = faturamento_paes + faturamento_broas

		caixa_rendimento = faturamento_total * 0.1

		escreva("Total arrecadado nas vendas de pães e broas: R$ " + M.arredondar(faturamento_total, 2) + ", guardar na caixinha R$ " + M.arredondar(caixa_rendimento, 2))
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 715; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */