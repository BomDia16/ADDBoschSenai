programa {

	inclua biblioteca Util --> u

  funcao inicio() {
	// feito no Portugol WEB
  	
    inteiro secreto, numero = 0

    secreto = u.sorteia(0, 100)

    escreva("Descubra qual é o número secreto de 0 a 100!\n")

    enquanto(numero != secreto){
      escreva("Insira um número: ")
      leia(numero)

      se(numero > secreto) {
        escreva("O número secreto é menor do que você digitou\n")
      } senao se(numero < secreto){
        escreva("O número secreto é maior do que você digitou\n")
      }
    }

    escreva("Você descobriu o número!")
  }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 112; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */