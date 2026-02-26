const users = [
    { id: 1, name: 'Ana', age: 22, salary: 3500, active: true, role: 'dev' },
    { id: 2, name: 'Carlos', age: 29, salary: 7200, active: false, role: 'manager' },
    { id: 3, name: 'Marina', age: 31, salary: 6800, active: true, role: 'designer' },
    { id: 4, name: 'João', age: 19, salary: 2500, active: true, role: 'dev' },
    { id: 5, name: 'Fernanda', age: 27, salary: 4100, active: false, role: 'designer' },
    { id: 6, name: 'Lucas', age: 35, salary: 9500, active: true, role: 'manager' },
    { id: 7, name: 'Beatriz', age: 24, salary: 3900, active: true, role: 'dev' },
    { id: 8, name: 'Rafael', age: 33, salary: 7800, active: true, role: 'data_analyst' },
    { id: 9, name: 'Juliana', age: 26, salary: 5200, active: true, role: 'data_analyst' },
    { id: 10, name: 'Bruno', age: 41, salary: 11000, active: false, role: 'manager' },
    { id: 11, name: 'Camila', age: 30, salary: 6300, active: true, role: 'designer' },
    { id: 12, name: 'Thiago', age: 28, salary: 4700, active: true, role: 'dev' },
    { id: 13, name: 'Patricia', age: 37, salary: 8800, active: true, role: 'data_analyst' },
    { id: 14, name: 'Gustavo', age: 23, salary: 3100, active: false, role: 'dev' },
    { id: 15, name: 'Larissa', age: 34, salary: 7600, active: true, role: 'manager' }
]

let container = document.getElementById("container")

function createCard(pessoa) {
    let div = document.createElement('div')
    let span = document.createElement('span')
    span.innerHTML = `${pessoa.name}`
    div.appendChild(span)

    return div
}

function filtrarAtivos(pessoa) {
    filtrado = pessoa.filter((p) => p.active == true)
    let h1 = document.createElement('h1')
    h1.innerHTML = "Ativos"
    let content = document.createElement('div')
    content.appendChild(h1)
    filtrado.forEach(element => {
        let card = createCard(element)
        content.appendChild(card)
    });
    container.appendChild(content)
}

filtrarAtivos(users)

function filtrarInativos(pessoa) {
    filtrado = pessoa.filter((p) => p.active == false)
    let h1 = document.createElement('h1')
    h1.innerHTML = "Inativos"
    let content = document.createElement('div')
    content.appendChild(h1)
    filtrado.forEach(element => {
        let card = createCard(element)
        content.appendChild(card)
    });
    container.appendChild(content)
}

filtrarInativos(users)

function filtrarDevs(pessoa) {
    filtrado = pessoa.filter((p) => p.role == 'dev')
    let h1 = document.createElement('h1')
    h1.innerHTML = "Devs"
    let content = document.createElement('div')
    content.appendChild(h1)
    filtrado.forEach(element => {
        let card = createCard(element)
        content.appendChild(card)
    });
    container.appendChild(content)
}

filtrarDevs(users)

function filtrarDesigner(pessoa) {
    filtrado = pessoa.filter((p) => p.role == 'designer')
    let h1 = document.createElement('h1')
    h1.innerHTML = "Designer"
    let content = document.createElement('div')
    content.appendChild(h1)
    filtrado.forEach(element => {
        let card = createCard(element)
        content.appendChild(card)
    });
    container.appendChild(content)
}

filtrarDesigner(users)

function filtrarManager(pessoa) {
    filtrado = pessoa.filter((p) => p.role == 'manager')
    let h1 = document.createElement('h1')
    h1.innerHTML = "Manager"
    let content = document.createElement('div')
    content.appendChild(h1)
    filtrado.forEach(element => {
        let card = createCard(element)
        content.appendChild(card)
    });
    container.appendChild(content)
}

filtrarManager(users)

function filtrarData(pessoa) {
    filtrado = pessoa.filter((p) => p.role == 'data_analyst')
    let h1 = document.createElement('h1')
    h1.innerHTML = "Data Analyst"
    let content = document.createElement('div')
    content.appendChild(h1)
    filtrado.forEach(element => {
        let card = createCard(element)
        content.appendChild(card)
    });
    container.appendChild(content)
}

filtrarData(users)

function filtrarAbove5000(pessoa) {
    filtrado = pessoa.filter((p) => p.salary > 5000)
    let h1 = document.createElement('h1')
    h1.innerHTML = "Above 5000"
    let content = document.createElement('div')
    content.appendChild(h1)
    filtrado.forEach(element => {
        let card = createCard(element)
        content.appendChild(card)
    });
    container.appendChild(content)
}

filtrarAbove5000(users)

function filtrarUnder4000(pessoa) {
    filtrado = pessoa.filter((p) => p.salary < 4000)
    let h1 = document.createElement('h1')
    h1.innerHTML = "Under 4000"
    let content = document.createElement('div')
    content.appendChild(h1)
    filtrado.forEach(element => {
        let card = createCard(element)
        content.appendChild(card)
    });
    container.appendChild(content)
}

filtrarUnder4000(users)

function filtrarAbove30(pessoa) {
    filtrado = pessoa.filter((p) => p.age > 30)
    let h1 = document.createElement('h1')
    h1.innerHTML = "Above 30"
    let content = document.createElement('div')
    content.appendChild(h1)
    filtrado.forEach(element => {
        let card = createCard(element)
        content.appendChild(card)
    });
    container.appendChild(content)
}

filtrarAbove30(users)

function filtrarUnder25(pessoa) {
    filtrado = pessoa.filter((p) => p.age < 25)
    let h1 = document.createElement('h1')
    h1.innerHTML = "Under 25"
    let content = document.createElement('div')
    content.appendChild(h1)
    filtrado.forEach(element => {
        let card = createCard(element)
        content.appendChild(card)
    });
    container.appendChild(content)
}

filtrarUnder25(users)

function filtrarDataActive(pessoa) {
    filtrado = pessoa.filter((p) => p.role == 'data_analyst' && p.active == true)
    let h1 = document.createElement('h1')
    h1.innerHTML = "Active Data Analyst"
    let content = document.createElement('div')
    content.appendChild(h1)
    filtrado.forEach(element => {
        let card = createCard(element)
        content.appendChild(card)
    });
    container.appendChild(content)
}

filtrarDataActive(users)

function filtrarDevsAbove4000(pessoa) {
    filtrado = pessoa.filter((p) => p.role == 'dev' && p.salary > 4000)
    let h1 = document.createElement('h1')
    h1.innerHTML = "Devs Above 4000"
    let content = document.createElement('div')
    content.appendChild(h1)
    filtrado.forEach(element => {
        let card = createCard(element)
        content.appendChild(card)
    });
    container.appendChild(content)
}

filtrarDevsAbove4000(users)

function filtrarManagerAbove30(pessoa) {
    filtrado = pessoa.filter((p) => p.role == 'manager' && p.age > 30)
    let h1 = document.createElement('h1')
    h1.innerHTML = "Manager Above 30"
    let content = document.createElement('div')
    content.appendChild(h1)
    filtrado.forEach(element => {
        let card = createCard(element)
        content.appendChild(card)
    });
    container.appendChild(content)
}

filtrarManagerAbove30(users)