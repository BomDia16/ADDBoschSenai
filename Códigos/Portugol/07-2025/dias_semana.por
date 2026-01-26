programa
{
	
	funcao inicio()
	{	
		inteiro numero
		cadeia dia_semana
	
		escreva("Escolha um número de 1 a 7: ")
		leia(numero)

		escolha(numero) {
			caso(1):
				dia_semana = "Domingo"
			pare
			caso(2):
				dia_semana = "Segunda-feira"
			pare
			caso(3):
				dia_semana = "Terça-feira"
			pare
			caso(4):
				dia_semana = "Quarta-feira"
			pare
			caso(5):
				dia_semana = "Quinta-feira"
			pare
			caso(6):
				dia_semana = "Sexta-feira"
			pare
			caso(7):
				dia_semana = "Sábado"
			pare
			caso contrario:
				dia_semana = "Insira um valor válido"
			pare
		}

		escreva(dia_semana)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 460; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */