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

async function carregarUsuarios() {
    const response = await fetch('http://localhost:8080/vendas')
    
    const usuarios = await response.json()

    const tbody = document.getElementById('listaUsuarios')

    tbody.innerHTML = ""
    
    usuarios.forEach(user => {
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <td>${user.produto}</td>
            <td>${user.categoria_produto}</td>
            <td>${user.quantidade}</td>
            <td>${user.valor_total}</td>
            <td>${user.data_venda}</td>
            <td>${user.forma_pagamento}</td>
            <td>${user.responsavel}</td>
            <td>
                <button onclick="deletarUsuario(${user.id})">Deletar</button>
                <button onclick="atualizarUsuario(${user.id}, '${user.nome}', '${user.email}')">Atualizar</button>
            </td>
        `
        
        tbody.appendChild(tr)
    });
}

window.onload(carregarUsuarios())