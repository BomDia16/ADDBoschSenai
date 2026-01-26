programa {
  // feito no Portugol WEB

  inclua biblioteca Matematica --> m

  funcao inicio() {
    // atributos
    inteiro numero_rotas, i, numero_entregas, j
    cadeia nome_rota, nome_menor_rota = ""
    real horas_entrega = 0.0, total_horas, media_horas = 0.0, menor_media_horas = 1000000000000000000.0

    escreva("--- Análise de Eficiência de Rotas de Entrega Bosch ---\n")
    escreva("Informe o número total de rotas a serem analisadas: ")
    leia(numero_rotas)

    para (i = 1; i <= numero_rotas; i++) {
      escreva("--- Dados da ", i, "° Rota ---\n")
      escreva("Identificação da rota (ex: Rota A): ")
      leia(nome_rota)

      escreva("Número de entregas realizadas nessa rota: ")
      leia(numero_entregas)

      total_horas = 0.0

      para (j = 1; j <= numero_entregas; j++) {
        escreva("Tempo da ", j, "° entrega (em horas): ")
        leia(horas_entrega)

        // somar o tempo das entregas da rota
        total_horas += horas_entrega
      }

      // media de tempo de entrega da rota
        media_horas = total_horas / numero_entregas
        media_horas = m.arredondar(media_horas, 2)

        // analisa se aquela média de horas é a menor de todas
        se (media_horas < menor_media_horas) {
          menor_media_horas = media_horas
          nome_menor_rota = nome_rota
        }

      escreva("\nMédia de tempo da ", nome_rota, ": ", media_horas, " horas\n")
    }

    escreva("\n--- Relatório de Otimização de Rotas ---\n")
    escreva("A rota mais eficiente foi a ", nome_menor_rota, ",\n")
    escreva("com um tempo médio de ", menor_media_horas, " horas.")
  }
}
