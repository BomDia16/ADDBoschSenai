programa {
  // feito no Portugol WEB
  inclua biblioteca Texto --> t

  funcao inicio() {
    inteiro i, vagas
    cadeia placa

    escreva("Insira a quantidade de vagas: ")
    leia(vagas)
    escreva("-----------------------------------\n")

    se(vagas <= 0) {
      escreva("\nInsira um quantidade válida de vagas")
    }

    para(i = 1; i <= vagas; i++) {
      escreva("Insira a placa: ")
      leia(placa)

      escreva("Placa ", t.caixa_alta(placa), " -- vaga ", i, "\n")
      escreva("-----------------------------------\n")
    }
  }
}
