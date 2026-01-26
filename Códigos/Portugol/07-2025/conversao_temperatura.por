programa
{
	inclua biblioteca Matematica --> m
	
	funcao inicio()
	{
		inteiro conversao
		real celsius, fahrenheit
	
		escreva("1. Celsius para Fahrenheit\n")
		escreva("2. Fahrenheit para Celsius\n")
		escreva("Qual conversão gostaria de saber? ")
		leia(conversao)
		
		escolha(conversao){
			caso(1):
				escreva("Insira a temperatura em celsius: ")
				leia(celsius)

				fahrenheit = (1.8 * celsius) + 32
				escreva("\nTemperatura em fahrenheit é de " + m.arredondar(fahrenheit, 2) + "°F")
			pare
			caso(2):
				escreva("Insira a temperatura em fahrenheit: ")
				leia(fahrenheit)

				celsius = (fahrenheit - 32) / 1.8
				escreva("\nTemperatura em celsius é de " + m.arredondar(celsius, 2) + "°C")
			pare
			caso contrario:
				escreva("Insira um valor válido")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 414; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */