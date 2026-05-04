const form = document.getElementById('form_create')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const produto = document.getElementById('produto').value
    const quantidade = document.getElementById('quantidade').value
    const preco_unitario = document.getElementById('preco_unitario').value
    const forma_pagamento = document.getElementById('forma_pagamento').value
    const responsavel = document.getElementById('responsavel').value
    const categoria_produto = document.getElementById('categoria_produto').value
    
    const response = await fetch('http://localhost:8080/registro', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            produto: produto,
            quantidade: quantidade,
            preco_unitario: preco_unitario,
            forma_pagamento: forma_pagamento,
            responsavel: responsavel,
            categoria_produto: categoria_produto
        })
    })
    
    const data = await response.json()
    console.log(data)

    document.getElementById('produto').value = ""
    document.getElementById('quantidade').value = ""
    document.getElementById('preco_unitario').value = ""
    document.getElementById('forma_pagamento').value = ""
    document.getElementById('responsavel').value = ""
})