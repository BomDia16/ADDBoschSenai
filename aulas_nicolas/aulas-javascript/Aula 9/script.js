const users = require("./data.json")

// console.log(users.pop(0))

console.log(users)

const alto_salario = users.filter(element => element.salary > 3000)

console.log(users[14]["parents"]["father"])

console.log(alto_salario);

const pais = users.map((p) => {
    return { pais: p.parents }
})

console.log(pais);


// const endereco = async () => {
//     await fetch("https://viacep.com.br/ws/81710110/json/").then(response => {
//         return response.json()
//     }).then(data => {
//         console.log(data)
//     })
// }

// async function fetchData(url) {
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error('Network response was not ok: ' + response.statusText);
//     }

//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error('Fetch error:', error);
//   }
// }

// console.log(fetchData("https://viacep.com.br/ws/82820330/json/"))
const fetchData = async () => {
    const people = await fetch("https://viacep.com.br/ws/81710110/json/")
    const data = await people.json()
    console.log(data)
    return data
}

console.log(fetchData())