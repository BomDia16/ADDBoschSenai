programa
{
	
	funcao inicio()
	{
		// atributos
		cadeia nome
		inteiro ano_nascimento, ano_atual = 2025, idade, dias_de_vida

		// pedir o nome
		escreva("Insira o seu nome: ")
		leia(nome)

		// pedir ano nascimento
		escreva("Escreva o ano do seu nascimento: ")
		leia(ano_nascimento)

		// validacao ano nascimento
		se(ano_nascimento > ano_atual ou ano_nascimento < 1900) {
			escreva("Ano de nascimento inválido")
		} senao {
			idade = ano_atual - ano_nascimento
			dias_de_vida = idade * 365

			escreva("Nome: " + nome + "\n")
			escreva("Idade: " + idade + "\n")
			escreva("Dias de vida: " + dias_de_vida + "\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 620; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */