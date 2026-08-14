const form = document.querySelector("#chatForm")
const input = document.querySelector("#inputMessage")
const messages = document.querySelector("#messages")

const inputImage = document.querySelector("#inputImage")
const imagePreview = document.querySelector("#imagePreview")

let imagemSelecionada = null


function adicionarMensagem(texto, tipo) {

    const message = document.createElement("div")

    message.classList.add("message", tipo)

    message.textContent = texto

    messages.appendChild(message)

    messages.scrollTop = messages.scrollHeight
}


function converterImagemParaBase64(file) {

    return new Promise((resolve, reject) => {

        const reader = new FileReader()

        reader.onload = () => {
            resolve(reader.result)
        }

        reader.onerror = () => {
            reject(new Error("Não foi possível ler a imagem"))
        }

        reader.readAsDataURL(file)
    })
}


inputImage.addEventListener("change", async () => {

    const arquivo = inputImage.files[0]

    if (!arquivo) {
        return
    }

    // Verifica se é realmente uma imagem
    if (!arquivo.type.startsWith("image/")) {

        alert("Selecione uma imagem.")

        inputImage.value = ""

        return
    }

    // Guarda a imagem selecionada
    imagemSelecionada = arquivo

    // Mostra preview
    imagePreview.src = URL.createObjectURL(arquivo)

    imagePreview.hidden = false
})


form.addEventListener("submit", async (event) => {

    event.preventDefault()

    const mensagemUsuario = input.value.trim()

    // Não permite enviar sem texto e sem imagem
    if (!mensagemUsuario && !imagemSelecionada) {
        return
    }


    // Mostra a mensagem do usuário
    if (mensagemUsuario) {

        adicionarMensagem(
            mensagemUsuario,
            "user"
        )
    }


    // Se tiver imagem, mostra a imagem no chat
    if (imagemSelecionada) {

        const imagemMensagem = document.createElement("div")

        imagemMensagem.classList.add(
            "message",
            "user",
            "image-message"
        )

        const imagem = document.createElement("img")

        imagem.src = URL.createObjectURL(imagemSelecionada)

        imagem.alt = "Imagem enviada pelo usuário"

        imagemMensagem.appendChild(imagem)

        messages.appendChild(imagemMensagem)

        messages.scrollTop = messages.scrollHeight
    }


    // Guarda a imagem antes de limpar
    const arquivoImagem = imagemSelecionada


    // Limpa os campos
    input.value = ""

    inputImage.value = ""

    imagemSelecionada = null

    imagePreview.hidden = true

    imagePreview.src = ""


    try {

        // Conteúdo que será enviado para a IA
        const content = []


        // Adiciona texto se existir
        if (mensagemUsuario) {

            content.push({
                type: "text",
                text: mensagemUsuario
            })

        } else {

            content.push({
                type: "text",
                text: "Analise esta imagem."
            })
        }


        // Adiciona imagem se existir
        if (arquivoImagem) {

            const base64Imagem =
                await converterImagemParaBase64(arquivoImagem)

            content.push({
                type: "image_url",

                image_url: {
                    url: base64Imagem
                }
            })
        }


        const response = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",

                    "Authorization":
                        ""
                },

                body: JSON.stringify({

                    // Modelo com visão
                    model:
                        "qwen/qwen3.6-27b",

                    messages: [

                        {
                            role: "system",

                            content:
                                "Você é um analista de dados industriais. " +
                                "Sempre responda em português. " +
                                "Responda somente a resposta final para o usuário. " +
                                "Nunca mostre seu raciocínio interno, pensamentos, análise interna ou conteúdo entre tags <think>. " +
                                "Não utilize Markdown."
                        },

                        {
                            role: "user",

                            content: content
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


        // Verifica erro da API
        if (!response.ok) {

            throw new Error(
                data.error?.message ||
                "Erro ao consultar a API"
            )
        }


        // Pega resposta da IA
        let respostaIA =
            data.choices[0].message.content


        // Remove <think>...</think>
        respostaIA = respostaIA.replace(
            /<think>[\s\S]*?<\/think>/gi,
            ""
        )


        // Remove espaços e quebras de linha
        respostaIA = respostaIA.trim()


        // Mostra somente a resposta final
        adicionarMensagem(
            respostaIA,
            "ai"
        )


    } catch (error) {

        console.error(error)

        adicionarMensagem(
            "Erro: " + error.message,
            "ai"
        )
    }

})