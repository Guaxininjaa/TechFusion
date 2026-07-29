const ordens = []

function getByID(id){
    return document.getElementById(id)
}

// CREATE - cadastra a ordem de serviço
function cadastrarOS(){
    let novaOS = {
        cliente: getByID('inputCliente').value,
        equipamento: getByID('inputEquipamento').value,
        defeito: getByID('inputDefeito').value,
        status: getByID('inputStatus').value
    }
    ordens.push(novaOS)
    console.log(ordens);
    mostrarTodas()
}

// UPDATE - salva as alterações da OS do cliente digitado
function salvarOS(){
    let cliente = getByID('inputCliente').value
    for(let i=0; i<ordens.length; i++){
        if(ordens[i].cliente == cliente){
            ordens[i].equipamento = getByID('inputEquipamento').value
            ordens[i].defeito = getByID('inputDefeito').value
            ordens[i].status = getByID('inputStatus').value
        }
    }
    mostrarTodas()
}

// DELETE - exclui a OS do cliente digitado
function excluirOS(){
    let cliente = getByID('inputCliente').value
    for(let i=0; i<ordens.length; i++){
        if(ordens[i].cliente == cliente){
            ordens.splice(i, 1)
        }
    }
    mostrarTodas()
}

// READ - mostra todas as ordens no painel
function mostrarTodas(){
    getByID('painel').innerHTML = '<h2>Ordens de Serviço</h2>'
    for(let i=0; i<ordens.length; i++){
        getByID('painel').innerHTML += 
            '<div class="card">' +
                '<p><b>Cliente:</b> ' + ordens[i].cliente + '</p>' +
                '<p><b>Equipamento:</b> ' + ordens[i].equipamento + '</p>' +
                '<p><b>Defeito:</b> ' + ordens[i].defeito + '</p>' +
                '<p><b>Status:</b> ' + ordens[i].status + '</p>' +
            '</div>'
    }
}