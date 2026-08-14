const form = document.querySelector("#chatForm")
const input = document.querySelector("#inputMessage")
const messages = document.querySelector("#messages")


function adicionarMensagem(texto, tipo) {
    const message = document.createElement("div")

    message.classList.add("message", tipo)

    message.textContent = texto

    messages.appendChild(message)

    messages.scrollTop = messages.scrollHeight
}


form.addEventListener("submit", async (event) => {
    event.preventDefault()

    const mensagemUsuario = input.value.trim()

    if (!mensagemUsuario) return


    // Mostra a mensagem do usuário
    adicionarMensagem(mensagemUsuario, "user")

    // Limpa o input
    input.value = ""


    try {

        const response = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": ""
                },

                body: JSON.stringify({
                    model: "openai/gpt-oss-120b",

                    messages: [
                        {
                            role: "system",
                            content: "Você é um matemático responsável por realizar contas matemáticas. Sempre responda em português do Brasil. Não traga respostas como markdown, apenas como texto formatado"
                        },
                        {
                            role: "user",
                            content: mensagemUsuario
                        }
                    ],

                    temperature: 0.7,

                    max_completion_tokens: 2048,

                    stream: false
                })
            }
        )


        const data = await response.json()

        console.log(data)


        // Verifica se a API retornou erro
        if (!response.ok) {
            throw new Error(
                data.error?.message || "Erro ao consultar a API"
            )
        }


        // Pega a resposta da IA
        const respostaIA = data.choices[0].message.content


        // Mostra no chat
        adicionarMensagem(respostaIA, "ai")

    } catch (error) {

        console.error(error)

        adicionarMensagem(
            "Erro: " + error.message,
            "ai"
        )
    }

})