programa
{

	inclua biblioteca Matematica --> m
	
	funcao inicio()
	{
		// atributos
		real total_refresco, litros_maracuja, litros_agua, partes_agua = 0.8, partes_suco = 0.2

		escreva("Insira quantos litros de refresco você deseja: ")
		leia(total_refresco)

		litros_maracuja = total_refresco * partes_suco
		litros_agua = total_refresco * partes_agua

		escreva("Serão necessários " + m.arredondar(litros_maracuja, 1) + " litros de maracujá e " + m.arredondar(litros_agua, 1) + " litros de água.")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 475; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */