programa {
  // feito no Portugol WEB

  inclua biblioteca Matematica --> m

  funcao inicio() {
    // atributos
    inteiro numero_funcionarios, i, anos_servico
    real salario, bonus, soma_bonus = 0
    cadeia nome

    // número dos funcionários
    escreva("--- Cálculo Bônus de Final de Ano ---\n")
    escreva("Insira o número de colaboradores para serem analisados: ")
    leia(numero_funcionarios)

    // loop para checar todos os colaboradores
    para(i = 0; i < numero_funcionarios; i++) {
      escreva("\n--- Dados do ", i + 1, "° Colaborador ---\n")
      escreva("Insira o nome do funcionário: ")
      leia(nome)

      escreva("Insira o salário do funcionário: ")
      leia(salario)

      escreva("Insira o tempo de serviço do funcionário em anos: ")
      leia(anos_servico)

      se (anos_servico >= 5) {
        bonus = salario * 0.15
      } senao se (anos_servico < 5){
        bonus = salario * 0.1
      }
      bonus = m.arredondar(bonus, 2)
      escreva("O/A Colaborador/a ", nome, " receberá um bônus de R$ ", bonus, "\n")

      // adcionar o bônus a soma
      soma_bonus += bonus
    }

    // soma final de bônus
    escreva("\n--- Resumo Final ---\n")
    escreva("O valor total a ser destinado para o pagamento de bônus é de R$ ", soma_bonus)
    escreva("\n--------------------")
  }
}
