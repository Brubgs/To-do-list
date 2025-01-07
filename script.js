const containerTarefa = document.getElementById('tarefas')
const mensagem = document.getElementById('mensagem')

var tarefas = []
mostrar()

function addTarefa(){
    
    const inputTarefa = document.getElementById('inputTarefa')
    const tarefa = inputTarefa.value
    if(!tarefa) {
        mensagem.innerHTML = `<p class="mensagemN">Escreva uma tarefa antes!</p>`
    }
    else {
        mensagem.innerHTML = `<p class="mensagemP">Tarefa "${tarefa}" adicionada com sucesso!</p>`
        addLocalStorage()
    }
    
    inputTarefa.value = ''
   
    mostrar()
}

function addLocalStorage() {
    if(localStorage.array){
        tarefas = JSON.parse(localStorage.getItem('array'))
    }

    let tarefaNova = document.getElementById('inputTarefa').value
    tarefas.push(tarefaNova)
    localStorage.array = JSON.stringify(tarefas)
}

function mostrar() {
    const containerTarefa = document.getElementById('tarefas');
    containerTarefa.innerHTML = "";
    if (localStorage.array) {
        tarefas = JSON.parse(localStorage.getItem('array'));
    }

    tarefas.forEach((tarefa, index) => {
        let div = document.createElement('div');
        div.className = 'tarefa';
        div.innerHTML = `<p>${tarefa}</p>
                         <div class="botoesTarefa">
                             <button class="botaoTarefa">Excluir</button>
                         </div>`;
        containerTarefa.appendChild(div);

        const botaoExcluir = div.querySelector('.botaoTarefa');

        botaoExcluir.addEventListener('click', () => {
            tarefas.splice(index, 1);
            localStorage.array = JSON.stringify(tarefas);
            mostrar();
            mensagem.innerHTML = `<p class="mensagemN">Tarefa excluída!</p>`;
        });
    });
}

function limparLista(){
    tarefas = []
    localStorage.array = JSON.stringify(tarefas)
    mostrar()
    mensagem.innerHTML = ""
}