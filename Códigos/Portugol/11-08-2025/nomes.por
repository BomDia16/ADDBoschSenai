programa {
  // feito no Portugol WEB

  inclua biblioteca Texto --> t

  funcao inicio() {
    // atributos
    cadeia nome[3] = {"Cauba", "Dedas", "Ongos"}
    inteiro i

    para(i = 0; i < 3; i++) {
      nome[i] = t.caixa_alta(nome[i])
      escreva(nome[i], "\n")
    }
  }
}
