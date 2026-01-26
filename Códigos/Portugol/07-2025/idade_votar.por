programa
{
	
	funcao inicio()
	{
		inteiro idade
		cadeia pode_votar
	
		escreva("Insira a sua idade: ")
		leia(idade)
		
		se (idade >= 60) {
			pode_votar = "O voto é opcional"
		} senao se (idade >= 18 e idade < 60) {
			pode_votar = "O voto é obrigatório"
		} senao se (idade == 16 ou idade == 17) {
			pode_votar = "O voto é opcional"
		} senao {
			pode_votar = "O voto não é permitido"
		}

		escreva(pode_votar)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 181; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */