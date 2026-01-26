programa {

  // feito no Portugol WEB

  inclua biblioteca Matematica --> m

  funcao inicio() {
    // atributos
    logico continuar = verdadeiro
    inteiro opcao, lote, total_inspecionadas, total_defeituosas, mes, ano
    real taxa_defeitos
    cadeia codigo_defeito

    // loop do menu
    enquanto(continuar) {
      escreva("--- Menu de Relatórios de Qualidade ---\n")
      escreva("1. Relatório de Qualidade Padrão\n")
      escreva("2. Relatório de Defeitos Detalhado\n")
      escreva("3. Relatório de Rastreabilidade\n")
      escreva("4. Sair\n")
      leia(opcao)

      // ver qual é a opção
      escolha(opcao){
        // Relatório de Qualidade Padrão
        caso 1:
          escreva("Insira o número do lote (padrão de 3 algarismos): ")
          leia(lote)

          escreva("Insira o número de peças inspecionadas: ")
          leia(total_inspecionadas)

          escreva("Insira o número de peças defeituosas: ")
          leia(total_defeituosas)

          taxa_defeitos = (total_defeituosas / total_inspecionadas) * 100
          taxa_defeitos = m.arredondar(taxa_defeitos, 2)
          escreva("Taxa de defeitos do lote ", lote, ": ", taxa_defeitos, "%\n")
        pare

        // Relatório de Defeitos Detalhado
        caso 2:
          escreva("Insira o código do defeito (F1, F2 ou F3): ")
          leia(codigo_defeito)

          escolha(codigo_defeito){
            caso "F1":
              escreva("Descrição: O produto apresenta inconsistências dimensionais ou de acabamento devido a um desalinhamento ou desajuste nos parâmetros da máquina.\n")
              escreva("Ação Recomendada: Reavaliar a calibração da máquina.\n")
            pare
            caso "F2":
              escreva("Descrição: O produto falhou no controle de qualidade devido a imperfeições ou impurezas no material de base.\n")
              escreva("Ação Recomendada: Checar o lote de matéria-prima.\n")
            pare
            caso "F3":
              escreva("Descrição: O produto tem falhas superficiais ou geométricas causadas pelo desgaste ou dano em uma das ferramentas de corte ou moldagem da máquina.\n")
              escreva("Ação Recomendada: Inspeção visual da ferramenta.\n")
            pare
            caso contrario:
              escreva("Insira um valor válido!\n")
            pare
          }
        pare

        // Relatório de Rastreabilidade
        caso 3:
          escreva("Insira o número do lote (padrão de 3 algarismos): ")
          leia(lote)

          escreva("Insira o número do mês: ")
          leia(mes)

          escreva("Insira o número do ano: ")
          leia(ano)

          escreva("Buscando histórico do lote ", lote, " referente a ", mes, "/", ano, "...\n")
        pare

        // Sair
        caso 4:
          continuar = falso
          escreva("Até mais")
        pare

        // Default
        caso contrario:
          escreva("Opção inválida! Tente novamente.\n")
        pare
      }
    }
  }
}
