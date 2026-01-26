programa {
  // feito no Portugol WEB

  funcao inicio() {
    // atributos
    cadeia nome[5] = {"Lucas", "Marcelo", "Juliana", "Márcia", "Matilde"}
    inteiro i
    inteiro peso[5] = {70, 71, 69, 50, 70}
    real altura[5] = {1.78, 1.69, 1.81, 1.60, 1.67}

    escreva("Alunos que possuem altura maior ou igual a 1,70 e peso maior ou igual a 70:\n")

    para(i = 0; i < 5; i++) {
      se(altura[i] >= 1.70 e peso[i] >= 70) {
        escreva(nome[i], " - ", altura[i], "m e ", peso[i], "kg")
      }
    }
  }
}
