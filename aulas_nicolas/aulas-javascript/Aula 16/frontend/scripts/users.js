async function carregarUsuarios() {
    const response = await fetch('http://localhost:8080/user/users')
    
    const usuarios = await response.json()
    
    const tbody = document.getElementById('listaUsuarios')
    
    tbody.innerHTML = ""
    
    usuarios.forEach(user => {
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td>
            <button onclick="deletarUsuario(${user.id})">Deletar</button>
            <button onclick="atualizarUsuario(${user.id}, '${user.aome}', '${user.email}', '${user.password}')">Atualizar</button>
        </td>
        `
        
        tbody.appendChild(tr)
    });
}


const form = document.getElementById('form_create')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    
    const response = await fetch('http://localhost:8080/user/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
        })
    })
    
    const data = await response.json()
    console.log(data)

    document.getElementById('name').value = ""
    document.getElementById('email').value = ""
    document.getElementById('password').value = ""

    carregarUsuarios()
}) 

async function deletarUsuario(id) {
    const deletar = await fetch(`http://localhost:8080/user/delete/${id}`, {
        method: "DELETE"
    })
    carregarUsuarios()
}

function atualizarUsuario(id) {
    window.location.href = `update.html?id=${id}`
}

window.onload = carregarUsuarios