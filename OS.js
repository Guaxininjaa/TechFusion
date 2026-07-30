let ordens = []



// SALVAR LOCALSTORAGE

function salvarDados(){

localStorage.setItem("ordens", JSON.stringify(ordens))

}



// CARREGAR DADOS

function carregarDados(){

ordens = JSON.parse(localStorage.getItem("ordens")) || []

}





// CADASTRAR

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






// LIMPAR

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



}







// MOSTRAR TODAS


function mostrarTodas(){


carregarDados()


let painel = document.getElementById("painel-os")


painel.innerHTML = ""



if(ordens.length == 0){

painel.innerHTML = "Nenhuma Ordem de Serviço cadastrada."

return

}





for(let i = 0; i < ordens.length; i++){



painel.innerHTML += `


<div class="card-os">


<h2>OS ${i+1}</h2>


<p><b>Cliente:</b> ${ordens[i].cliente}</p>


<p><b>Equipamento:</b> ${ordens[i].equipamento}</p>


<p><b>Marca:</b> ${ordens[i].marca}</p>


<p><b>Modelo:</b> ${ordens[i].modelo}</p>


<p><b>Defeito:</b> ${ordens[i].defeito}</p>


<p><b>Status:</b> ${ordens[i].status}</p>



<button onclick="editarOS(${ordens[i].id})">

Editar

</button>



<button onclick="excluirOS(${ordens[i].id})">

Excluir

</button>



</div>


`



}


}







// EDITAR


function editarOS(id){


carregarDados()



for(let i = 0; i < ordens.length; i++){



if(ordens[i].id == id){



document.getElementById("input-cliente").value = ordens[i].cliente

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







// SALVAR ALTERAÇÃO


function salvarOS(){


carregarDados()



let id = Number(document.getElementById("input-id").value)




for(let i = 0; i < ordens.length; i++){



if(ordens[i].id == id){



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







// EXCLUIR


function excluirOS(id){



carregarDados()



for(let i = 0; i < ordens.length; i++){



if(ordens[i].id == id){


ordens.splice(i,1)


}



}



salvarDados()


mostrarTodas()



}








// PESQUISA


function abrirPesquisa(){


let barra = document.getElementById("barra-pesquisa")



if(barra.style.display == "none"){


barra.style.display = "block"


}else{


barra.style.display = "none"


}



}








function pesquisarCliente(){


carregarDados()



let nome = document.getElementById("pesquisa-cliente").value.toLowerCase()



let painel = document.getElementById("painel-os")


painel.innerHTML = ""




for(let i = 0; i < ordens.length; i++){



if(ordens[i].cliente.toLowerCase().includes(nome)){



painel.innerHTML += `


<div class="card-os">


<h2>OS ${i+1}</h2>


<p><b>Cliente:</b> ${ordens[i].cliente}</p>


<p><b>Equipamento:</b> ${ordens[i].equipamento}</p>


<p><b>Status:</b> ${ordens[i].status}</p>



<button onclick="editarOS(${ordens[i].id})">

Editar

</button>


<button onclick="excluirOS(${ordens[i].id})">

Excluir

</button>



</div>


`



}



}



}




mostrarTodas()