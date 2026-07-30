const formulario = document.getElementById("form-produto");

const tabela = document.getElementById("tabela-produtos");

const campoBusca = document.getElementById("busca-nome");

const campoCategoria = document.getElementById("filtro-categoria");

const botaoCancelar = document.getElementById("btn-cancelar");

const titulo = document.getElementById("titulo-form");



let produtos = JSON.parse(localStorage.getItem("produtosTechFusion")) || [];


let imagem = "";




// carregar imagem

document.getElementById("foto").addEventListener("change", function(){


let arquivo = this.files[0];


if(arquivo){


let leitor = new FileReader();


leitor.onload = function(e){

imagem = e.target.result;

}


leitor.readAsDataURL(arquivo);


}


});




// salvar produto

formulario.addEventListener("submit", function(evento){


evento.preventDefault();



let id = document.getElementById("produto-id").value;



let produto = {


id: id ? Number(id) : Date.now(),


foto: imagem,


marca: document.getElementById("marca").value,


modelo: document.getElementById("modelo").value,


cor: document.getElementById("cor").value,


categoria: document.getElementById("categoria").value,


quantidade: Number(document.getElementById("quantidade").value),


precoCusto: Number(document.getElementById("preco-custo").value),


precoVenda: Number(document.getElementById("preco-venda").value),


descricao: document.getElementById("descricao").value


};





if(id){


let posicao = produtos.findIndex(function(p){

return p.id == id;

});



if(imagem == ""){

produto.foto = produtos[posicao].foto;

}


produtos[posicao] = produto;



}else{


produtos.push(produto);


}



salvarProdutos();


limparFormulario();



});






function listarProdutos(){


tabela.innerHTML = "";



let nome = campoBusca.value.toLowerCase();


let categoria = campoCategoria.value.toLowerCase();




produtos.forEach(function(produto){



let nomeProduto = (

produto.marca + " " + produto.modelo

).toLowerCase();



if(
nomeProduto.includes(nome)
&&
produto.categoria.toLowerCase().includes(categoria)
){



let linha = document.createElement("tr");



linha.innerHTML = `


<td>

${
produto.foto

?

`<img src="${produto.foto}" width="50">`

:

"Sem foto"

}

</td>



<td>

${produto.marca}
${produto.modelo}

</td>


<td>

${produto.cor}

</td>


<td>

${produto.categoria}

</td>


<td>

${produto.quantidade}

</td>


<td>

R$ ${produto.precoCusto.toFixed(2)}

</td>


<td>

R$ ${produto.precoVenda.toFixed(2)}

</td>



<td>


<button onclick="editarProduto(${produto.id})">

Editar

</button>



<button onclick="excluirProduto(${produto.id})">

Excluir

</button>



</td>


`;



tabela.appendChild(linha);



}



});


}






function editarProduto(id){


let produto = produtos.find(function(p){

return p.id == id;

});



document.getElementById("produto-id").value = produto.id;


document.getElementById("marca").value = produto.marca;


document.getElementById("modelo").value = produto.modelo;


document.getElementById("cor").value = produto.cor;


document.getElementById("categoria").value = produto.categoria;


document.getElementById("quantidade").value = produto.quantidade;


document.getElementById("preco-custo").value = produto.precoCusto;


document.getElementById("preco-venda").value = produto.precoVenda;


document.getElementById("descricao").value = produto.descricao;



imagem = "";


titulo.innerText = "Editar Produto";


botaoCancelar.style.display = "inline";



window.scrollTo(0,0);


}






function excluirProduto(id){


let confirmar = confirm(
"Deseja excluir este produto?"
);



if(confirmar){


produtos = produtos.filter(function(produto){

return produto.id != id;

});


salvarProdutos();


}


}







function salvarProdutos(){


localStorage.setItem(

"produtosTechFusion",

JSON.stringify(produtos)

);



listarProdutos();


}







function limparFormulario(){


formulario.reset();


document.getElementById("produto-id").value = "";


imagem = "";


titulo.innerText = "Cadastrar Produto";


botaoCancelar.style.display = "none";


}







botaoCancelar.addEventListener("click", function(){


limparFormulario();


});






campoBusca.addEventListener("input", listarProdutos);


campoCategoria.addEventListener("input", listarProdutos);





listarProdutos();