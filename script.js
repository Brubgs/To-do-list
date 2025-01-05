const containerTarefa = document.getElementById('tarefas')
const mensagem = document.getElementById('mensagem')

function addTarefa(){
    
    const inputTarefa = document.getElementById('inputTarefa')
    const tarefa = inputTarefa.value
    if(!tarefa) {
        mensagem.innerHTML = `<p class="mensagemN">Escreva uma tarefa antes!</p>`
    }
    else {
        mensagem.innerHTML = `<p class="mensagemP">Tarefa adicionada com sucesso!</p>`

        const novaTarefa = document.createElement('div')
        novaTarefa.className = 'tarefa'
        novaTarefa.innerHTML = `<p>${tarefa}</p>
                                <div class="botoesTarefa">
                                    <button class="botaoTarefa" id="botaoExcluir">Excluir</button>
                                </div>`
        containerTarefa.appendChild(novaTarefa)

        const botaoExcluir = novaTarefa.querySelector('.botaoTarefa')
        
        botaoExcluir.addEventListener('click', () => {
            novaTarefa.remove()
            mensagem.innerHTML = `<p class="mensagemN">Tarefa excluída!</p>`
        })

    
    }
    inputTarefa.value = ''
}