async function carregarUsuario() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const response = await fetch(`http://localhost:8080/user/find/${id}`)
    const user = await response.json()

    document.getElementById('name').value = user.name
    document.getElementById('email').value = user.email
    document.getElementById('password').value = user.password
}

const form = document.getElementById('form_create')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    
    const response = await fetch(`http://localhost:8080/user/update/${id}`, {
        method: 'PUT',
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

    carregarUsuario()
}) 

window.onload = carregarUsuario()