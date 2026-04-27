const form = document.getElementById('form')
const form_atualizar = document.getElementById('form_atualizar')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    
    const response = await fetch('http://localhost:8090/registro', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    
    const data = await response.json()
    console.log(data)
    carregarUsuarios()

    document.getElementById('nome').value = ""
    document.getElementById('email').value = ""
})

form_atualizar.addEventListener('submit', async (e) => {
    e.preventDefault()
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    
    const response = await fetch('http://localhost:8090/registro', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    
    const data = await response.json()
    console.log(data)
    carregarUsuarios()

    document.getElementById('nome').value = ""
    document.getElementById('email').value = ""
})

async function carregarUsuarios() {
    const response = await fetch('http://localhost:8090/usuarios')
    
    const usuarios = await response.json()

    const tbody = document.getElementById('listaUsuarios')

    tbody.innerHTML = ""
    
    usuarios.forEach(user => {
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <td>${user.nome}</td>
            <td>${user.email}</td>
            <td>
                <button onclick="deletarUsuario(${user.id})">Deletar</button>
                <button onclick="atualizarUsuario(${user.id}, '${user.nome}', '${user.email}')">Atualizar</button>
            </td>
        `
        
        tbody.appendChild(tr)
    });
}

async function atualizarUsuario(id, nome, email) {
    const nome_atualizar = document.getElementById("nome_atualizar")
    const email_atualizar = document.getElementById("email_atualizar")

    nome_atualizar.value = nome
    email_atualizar.value = email
}

async function deletarUsuario(id) {
    const response = await fetch(`http://localhost:8090/deletar/${id}`, {
        method: 'DELETE'
    })

    carregarUsuarios()
}

window.onload(carregarUsuarios())