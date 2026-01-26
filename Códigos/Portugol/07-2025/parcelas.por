programa
{
	inclua biblioteca Matematica --> M
	
	funcao inicio()
	{
		real preco_a_vista, preco_total, valor_parcelas
		inteiro parcelas = 1

		escreva("Insira a preço a vista: ")
		leia(preco_a_vista)

		enquanto (parcelas < 6) {
			se (parcelas == 3) {
				preco_total = preco_a_vista * 1.1
			} senao se (parcelas == 5) {
				preco_total = preco_a_vista * 1.2
			} senao {
				preco_total = preco_a_vista
			}
	
			preco_total = M.arredondar(preco_total, 2)
			valor_parcelas = preco_total / parcelas
	
			valor_parcelas = M.arredondar(valor_parcelas, 2)
			escreva("O valor total a pagar é R$ " + preco_total + " em " + parcelas + " parcela(s) de R$ " + valor_parcelas + "\n")

			parcelas++
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 705; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */