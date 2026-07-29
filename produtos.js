const form = document.getElementById('form-produto');
const tabela = document.getElementById('tabela-produtos');
const buscaNome = document.getElementById('busca-nome');
const filtroCategoria = document.getElementById('filtro-categoria');
const btnCancelar = document.getElementById('btn-cancelar');
const tituloForm = document.getElementById('titulo-form');
const btnToggleEstoque = document.getElementById('btn-toggle-estoque');
const secaoEstoque = document.getElementById('secao-estoque');

let estoque = JSON.parse(localStorage.getItem('estoqueTechFusion')) || [];
let fotoBase64 = "";

// Alternar visibilidade do estoque com o botão
btnToggleEstoque.addEventListener('click', function() {
    if (secaoEstoque.style.display === "none") {
        secaoEstoque.style.display = "block";
        btnToggleEstoque.innerText = "📁 Fechar Estoque Atual";
    } else {
        secaoEstoque.style.display = "none";
        btnToggleEstoque.innerText = "📂 Abrir / Ver Estoque Atual";
    }
});

document.getElementById('foto').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            fotoBase64 = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// CREATE / UPDATE
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const idInput = document.getElementById('produto-id').value;
    
    const produto = {
        id: idInput ? Number(idInput) : Date.now(),
        foto: fotoBase64,
        marca: document.getElementById('marca').value,
        modelo: document.getElementById('modelo').value,
        cor: document.getElementById('cor').value,
        categoria: document.getElementById('categoria').value,
        quantidade: document.getElementById('quantidade').value,
        precoCusto: document.getElementById('preco-custo').value,
        precoVenda: document.getElementById('preco-venda').value,
        descricao: document.getElementById('descricao').value // Novo campo de descrição
    };

    if (idInput) {
        const index = estoque.findIndex(p => p.id === produto.id);
        if (fotoBase64 === "") {
            produto.foto = estoque[index].foto;
        }
        estoque[index] = produto;
    } else {
        estoque.push(produto);
    }

    salvarEAtualizar();
    resetarFormulario();
});

// READ
function renderizarTabela() {
    tabela.innerHTML = '';
    
    const termoBusca = buscaNome.value.toLowerCase();
    const termoCategoria = filtroCategoria.value.toLowerCase();

    const produtosFiltrados = estoque.filter(p => {
        const nomeCompleto = `${p.marca} ${p.modelo}`.toLowerCase();
        const bateuNome = nomeCompleto.includes(termoBusca);
        const bateuCategoria = p.categoria.toLowerCase().includes(termoCategoria);
        
        return bateuNome && bateuCategoria;
    });

    produtosFiltrados.forEach(p => {
        const tr = document.createElement('tr');
        const htmlFoto = p.foto ? `<img src="${p.foto}" width="50" height="50">` : 'Sem foto';

        tr.innerHTML = `
            <td>${htmlFoto}</td>
            <td><strong>${p.marca}</strong> ${p.modelo}</td>
            <td>${p.cor}</td>
            <td>${p.categoria}</td>
            <td>${p.descricao || ''}</td>
            <td>${p.quantidade}</td>
            <td>R$ ${p.precoCusto}</td>
            <td>R$ ${p.precoVenda}</td>
            <td>
                <button onclick="prepararEdicao(${p.id})">Editar</button>
                <button onclick="deletarProduto(${p.id})">Excluir</button>
            </td>
        `;
        tabela.appendChild(tr);
    });
}

// UPDATE (Preparar edição)
window.prepararEdicao = function(id) {
    const produto = estoque.find(p => p.id === id);
    
    document.getElementById('produto-id').value = produto.id;
    document.getElementById('marca').value = produto.marca;
    document.getElementById('modelo').value = produto.modelo;
    document.getElementById('cor').value = produto.cor;
    document.getElementById('categoria').value = produto.categoria;
    document.getElementById('quantidade').value = produto.quantidade;
    document.getElementById('preco-custo').value = produto.precoCusto;
    document.getElementById('preco-venda').value = produto.precoVenda;
    document.getElementById('descricao').value = produto.descricao || '';
    
    fotoBase64 = "";
    
    tituloForm.innerText = "Editar Produto";
    btnCancelar.style.display = "inline";
    window.scrollTo(0, 0);
};

// DELETE
window.deletarProduto = function(id) {
    if (confirm("Deseja realmente excluir este produto?")) {
        estoque = estoque.filter(p => p.id !== id);
        salvarEAtualizar();
    }
};

function salvarEAtualizar() {
    localStorage.setItem('estoqueTechFusion', JSON.stringify(estoque));
    renderizarTabela();
}

function resetarFormulario() {
    form.reset();
    document.getElementById('produto-id').value = "";
    fotoBase64 = "";
    tituloForm.innerText = "Cadastrar Novo Produto";
    btnCancelar.style.display = "none";
}

btnCancelar.addEventListener('click', resetarFormulario);
buscaNome.addEventListener('input', renderizarTabela);
filtroCategoria.addEventListener('input', renderizarTabela);

renderizarTabela();