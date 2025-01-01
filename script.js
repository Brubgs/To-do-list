const containerTarefa = document.getElementById('tarefas')
const mensagem = document.getElementById('mensagem')
function addTarefa(){
    
    const inputTarefa = document.getElementById('inputTarefa').value
    if(!inputTarefa) {
        mensagem.innerHTML = `<p class="mensagemN">Escreva uma tarefa antes!</p>`
    }
    else {
        mensagem.innerHTML = `<p class="mensagemP">Tarefa adicionada com sucesso!</p>`
        containerTarefa.innerHTML += ` <div class="tarefa">
                                        <p>${inputTarefa}</p>
                                        <div class="botoesTarefa">
                                            <button class="botaoTarefa">Excluir</button>
                                        </div>
                                    </div>
    `
    }
    
}
