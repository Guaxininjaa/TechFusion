// C >> Create >> Cadastrar
// R >> Read >> Ler
// U >> Update >> Atualizar
// D >> Delete >> Excluir

let ordens = []

function salvarDados(){

    localStorage.setItem("ordens", JSON.stringify(ordens))

}

function carregarDados(){

    ordens = JSON.parse(localStorage.getItem("ordens")) || []

}

function cadastrarOS(){

    carregarDados()

    const novaOS = {

        id: Date.now(),

        cliente: document.getElementById("input-cliente").value,

        equipamento: document.getElementById("input-equipamento").value,

        marca: document.getElementById("input-marca").value,

        modelo: document.getElementById("input-modelo").value,

        defeito: document.getElementById("input-defeito").value,

        acessorios: document.getElementById("input-acessorios").value,

        observacoes: document.getElementById("input-observacoes").value,

        data: document.getElementById("input-data").value,

        status: document.getElementById("input-status").value

    }

    ordens.push(novaOS)

    salvarDados()

    limparFormulario()

    mostrarTodas()

}

function limparFormulario(){

    document.getElementById("input-cliente").value = ""

    document.getElementById("input-equipamento").value = ""

    document.getElementById("input-marca").value = ""

    document.getElementById("input-modelo").value = ""

    document.getElementById("input-defeito").value = ""

    document.getElementById("input-acessorios").value = ""

    document.getElementById("input-observacoes").value = ""

    document.getElementById("input-data").value = ""

    document.getElementById("input-status").value = "Recebido"

    document.getElementById("input-id").value = ""

    document.getElementById("input-cliente").focus()

}

function mostrarTodas(){

    carregarDados()

    document.getElementById("painel-os").innerHTML = ""

    for(let i = 0; i < ordens.length; i++){

        document.getElementById("painel-os").innerHTML +=

        `<div class="card-os">

            <h2>OS ${i + 1}</h2>

            <p><b>Cliente:</b> ${ordens[i].cliente}</p>

            <p><b>Equipamento:</b> ${ordens[i].equipamento}</p>

            <p><b>Marca:</b> ${ordens[i].marca}</p>

            <p><b>Modelo:</b> ${ordens[i].modelo}</p>

            <p><b>Defeito:</b> ${ordens[i].defeito}</p>

            <p><b>Status:</b> ${ordens[i].status}</p>

        </div>`

    }

}

mostrarTodas()

function pesquisar(){

    carregarDados()

    let clienteProcurado = document.getElementById("input-cliente").value

    for(let i = 0; i < ordens.length; i++){

        if(clienteProcurado == ordens[i].cliente){

            document.getElementById("input-equipamento").value = ordens[i].equipamento

            document.getElementById("input-marca").value = ordens[i].marca

            document.getElementById("input-modelo").value = ordens[i].modelo

            document.getElementById("input-defeito").value = ordens[i].defeito

            document.getElementById("input-acessorios").value = ordens[i].acessorios

            document.getElementById("input-observacoes").value = ordens[i].observacoes

            document.getElementById("input-data").value = ordens[i].data

            document.getElementById("input-status").value = ordens[i].status

            document.getElementById("input-id").value = ordens[i].id

        }

    }

}

function salvarOS(){

    carregarDados()

    let id = Number(document.getElementById("input-id").value)

    for(let i = 0; i < ordens.length; i++){

        if(id == ordens[i].id){

            ordens[i].cliente = document.getElementById("input-cliente").value

            ordens[i].equipamento = document.getElementById("input-equipamento").value

            ordens[i].marca = document.getElementById("input-marca").value

            ordens[i].modelo = document.getElementById("input-modelo").value

            ordens[i].defeito = document.getElementById("input-defeito").value

            ordens[i].acessorios = document.getElementById("input-acessorios").value

            ordens[i].observacoes = document.getElementById("input-observacoes").value

            ordens[i].data = document.getElementById("input-data").value

            ordens[i].status = document.getElementById("input-status").value

        }

    }

    salvarDados()

    mostrarTodas()

    limparFormulario()

}

function excluirOS(){

    carregarDados()

    let id = Number(document.getElementById("input-id").value)

    for(let i = 0; i < ordens.length; i++){

        if(id == ordens[i].id){

            ordens.splice(i,1)

        }

    }

    salvarDados()

    mostrarTodas()

    limparFormulario()

}