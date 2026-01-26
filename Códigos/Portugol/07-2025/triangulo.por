programa
{
	
	funcao inicio()
	{
		// atributos
		real lado1, lado2, lado3
		cadeia tipo_triangulo
		
		escreva("Insira o valor do lado 1: ")
		leia(lado1)

		escreva("Insira o valor do lado 2: ")
		leia(lado2)

		escreva("Insira o valor do lado 3: ")
		leia(lado3)

		se (((lado1 + lado2) > lado3) e ((lado2 + lado3) > lado1) e ((lado1 + lado3) > lado2)) {
			escreva("É um triângulo válido\n")

			se (lado1 == lado2 e lado2 == lado3) {
				tipo_triangulo = "equilátero"
			} senao se (lado1 != lado2 e lado2 != lado3 e lado3 != lado1) {
				tipo_triangulo = "escaleno"
			} senao {
				tipo_triangulo = "isósceles"
			}

			escreva("Esse é um triângulo " + tipo_triangulo)
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 216; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */