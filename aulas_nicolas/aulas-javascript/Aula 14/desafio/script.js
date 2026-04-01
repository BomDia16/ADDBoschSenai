const dados = [
  { "id": 1, "produto": "Notebook", "categoria": "Eletrônicos", "preco": 3500, "quantidade": 2, "cliente": "Ana", "cidade": "Curitiba", "data": "2025-01-10" },
  { "id": 2, "produto": "Celular", "categoria": "Eletrônicos", "preco": 2000, "quantidade": 1, "cliente": "Carlos", "cidade": "São Paulo", "data": "2025-01-12" },
  { "id": 3, "produto": "Camiseta", "categoria": "Roupas", "preco": 80, "quantidade": 3, "cliente": "João", "cidade": "Curitiba", "data": "2025-01-15" },
  { "id": 4, "produto": "Calça", "categoria": "Roupas", "preco": 120, "quantidade": 2, "cliente": "Maria", "cidade": "Rio de Janeiro", "data": "2025-01-20" },
  { "id": 5, "produto": "Tênis", "categoria": "Calçados", "preco": 300, "quantidade": 1, "cliente": "Ana", "cidade": "Curitiba", "data": "2025-02-01" },
  { "id": 6, "produto": "Fone", "categoria": "Eletrônicos", "preco": 150, "quantidade": 4, "cliente": "Pedro", "cidade": "Belo Horizonte", "data": "2025-02-03" },
  { "id": 7, "produto": "Relógio", "categoria": "Acessórios", "preco": 500, "quantidade": 1, "cliente": "Lucas", "cidade": "São Paulo", "data": "2025-02-10" },
  { "id": 8, "produto": "Mochila", "categoria": "Acessórios", "preco": 200, "quantidade": 2, "cliente": "Fernanda", "cidade": "Curitiba", "data": "2025-02-15" },
  { "id": 9, "produto": "Tablet", "categoria": "Eletrônicos", "preco": 1800, "quantidade": 1, "cliente": "Carlos", "cidade": "São Paulo", "data": "2025-02-18" },
  { "id": 10, "produto": "Jaqueta", "categoria": "Roupas", "preco": 250, "quantidade": 1, "cliente": "Ana", "cidade": "Curitiba", "data": "2025-03-01" },
  { "id": 11, "produto": "Sandália", "categoria": "Calçados", "preco": 120, "quantidade": 2, "cliente": "Juliana", "cidade": "Salvador", "data": "2025-03-03" },
  { "id": 12, "produto": "Boné", "categoria": "Acessórios", "preco": 70, "quantidade": 3, "cliente": "Pedro", "cidade": "Belo Horizonte", "data": "2025-03-05" },
  { "id": 13, "produto": "Monitor", "categoria": "Eletrônicos", "preco": 900, "quantidade": 1, "cliente": "Lucas", "cidade": "São Paulo", "data": "2025-03-10" },
  { "id": 14, "produto": "Teclado", "categoria": "Eletrônicos", "preco": 250, "quantidade": 2, "cliente": "Fernanda", "cidade": "Curitiba", "data": "2025-03-12" },
  { "id": 15, "produto": "Mouse", "categoria": "Eletrônicos", "preco": 100, "quantidade": 3, "cliente": "João", "cidade": "Curitiba", "data": "2025-03-15" }
]
console.log(dados)

let faturamentoCategoriaChart = document.getElementById('faturamentoCategoria')

const faturamentoPorCategoria = dados.reduce((acc, produto) => {
  const { categoria, preco, quantidade } = produto;
  const faturamento = preco * quantidade;

  if (!acc[categoria]) {
    acc[categoria] = 0;
  }

  acc[categoria] += faturamento;

  return acc;
}, {});

let categorias = []
for (let chave in faturamentoPorCategoria) {
    let dado = {
        categoria: chave,
        valor: faturamentoPorCategoria[chave]
    }
    categorias.push(dado)
}

new Chart(faturamentoCategoriaChart, {
    type: 'bar',
    data: {
    labels: categorias.map(p => {
        return p.categoria
    }),
    datasets: [{
        label: 'Faturamento por Categoria',
        data: categorias.map((p) => {
            return p.valor
        }),
        borderWidth: 1
    }]
    },
    options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
    }
});

let quantidadeCategoriaChart = document.getElementById('quantidadeCategoria')

const quantidadePorCategoria = dados.reduce((acc, produto) => {
  const { categoria, quantidade } = produto;

  if (!acc[categoria]) {
    acc[categoria] = 0;
  }

  acc[categoria] += quantidade;

  return acc;
}, {});

categorias = []
for (let chave in quantidadePorCategoria) {
    let dado = {
        categoria: chave,
        quantidade: quantidadePorCategoria[chave]
    }
    categorias.push(dado)
}

new Chart(quantidadeCategoriaChart, {
    type: 'pie',
    data: {
    labels: categorias.map(p => {
        return p.categoria
    }),
    datasets: [{
        label: 'Faturamento por Categoria',
        data: categorias.map((p) => {
            return p.quantidade
        }),
        borderWidth: 1
    }]
    },
    options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
    }
});

let faturamentoCidadeChart = document.getElementById('faturamentoCidade')

const faturamentoPorCidade = dados.reduce((acc, produto) => {
  const { cidade, preco, quantidade } = produto;
  const faturamento = preco * quantidade;

  if (!acc[cidade]) {
    acc[cidade] = 0;
  }

  acc[cidade] += faturamento;

  return acc;
}, {});

let cidades = []
for (let chave in faturamentoPorCidade) {
    let dado = {
        cidade: chave,
        valor: faturamentoPorCidade[chave]
    }
    cidades.push(dado)
}

new Chart(faturamentoCidadeChart, {
    type: 'bar',
    data: {
    labels: cidades.map(p => {
        return p.cidade
    }),
    datasets: [{
        label: 'Faturamento por Cidade',
        data: cidades.map((p) => {
            return p.valor
        }),
        borderWidth: 1
    }]
    },
    options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
    }
});

