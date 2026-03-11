(async () => {
    let users = []
    let posts = []

    async function fetchData(url) {
        let response = await fetch(url)
        return response.json()
    }

    users = await fetchData('https://jsonplaceholder.typicode.com/users')
    posts = await fetchData('https://jsonplaceholder.typicode.com/posts')

    let userData = []

    async function processar() {
        for (const element of users){
            let userPosts = await fetchData(`https://jsonplaceholder.typicode.com/posts?userId=${element.id}`)
            element['posts'] = userPosts
            userData.push(element)
        }
    }

    await processar()

    const container = document.getElementById('container')

    userData.forEach(element => {
        console.log(element)

        const h1 = document.createElement('h1')
        h1.innerHTML = element.name
        container.appendChild(h1)
        const ul = document.createElement('ul')

        for (const post of element.posts) {
            const li = document.createElement('h4')
            li.textContent = post.title + " - " + post.body
            
            ul.appendChild(li)
        }

        container.appendChild(ul)
        
    });
})()