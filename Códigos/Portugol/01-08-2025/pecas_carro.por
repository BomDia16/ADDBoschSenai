programa {

inclua biblioteca Matematica --> m

  funcao inicio() {
	// feito no Portugol WEB
  	
    inteiro motores = 0, resistores = 0, capacitores = 0, m_trocados, r_trocados, c_trocados, contador = 1, total_pecas

    escreva("###### MENU DE PEÇAS ######\n")
    escreva("CÓDIGO\t ||\t PEÇAS\n")
    escreva("1\t       ||\t Motor 12V\n")
    escreva("2\t       ||\t Resistor 200\n")
    escreva("3\t       ||\t Capacitor 100yF\n")

    enquanto(contador <= 5){
      escreva(contador, "° Manutenção")

      escreva("\nMotores trocados: ")
      leia(m_trocados)

      escreva("Resistores trocados: ")
      leia(r_trocados)

      escreva("Capacitores trocados: ")
      leia(c_trocados)

      motores += m_trocados
      resistores += r_trocados
      capacitores += c_trocados

      contador++
    }

    total_pecas = motores + resistores + capacitores
    escreva("\nTotal de motores trocados: ", motores)
    escreva("\nTotal de resistores trocados: ", resistores)
    escreva("\nTotal de capacitores trocados: ", capacitores)
    escreva("\nTotal de peças trocadas: ", total_pecas)
    escreva("\n---------------------------------------------")
    escreva("\nPercentual de motores trocados: ", (motores / total_pecas)*100, "%")
    escreva("\nPercentual de resistores trocados: ", (resistores / total_pecas)*100, "%")
    escreva("\nPercentual de capacitores trocados: ", (capacitores / total_pecas)*100, "%")
  }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 286; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */