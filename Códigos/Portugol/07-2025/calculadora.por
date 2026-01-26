programa
{
	
	funcao inicio()
	{
		inteiro operacao
		real resultado, valor1, valor2
	
		escreva("Insira o primeiro valor: ")
		leia(valor1)
		
		escreva("Insira o segundo valor: ")
		leia(valor2)

		escreva("1. Soma\n")
		escreva("2. Subtração\n")
		escreva("3. Divisão\n")
		escreva("4. Multiplicação\n")
		escreva("Insira o número da operação que deseja fazer: ")
		leia(operacao)

		escolha(operacao) {
			caso(1):
				resultado = valor1 + valor2
			pare
			caso(2):
				resultado = valor1 - valor2
			pare
			caso(3):
				se(valor2 == 0) {
					escreva("Não é possível dividir por 0")
					resultado = 0.0
				} senao {
					resultado = valor1 / valor2
				}
			pare
			caso(4):
				resultado = valor1 * valor2
			pare
			caso contrario:
				escreva("Insira um valor válido")
				resultado = 0.0
			pare
		}

		escreva("\nO resultado final é " + resultado)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 70; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */