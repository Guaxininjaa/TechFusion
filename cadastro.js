const formulario = document.querySelector("#cadastroForm");

formulario.addEventListener("submit", function(event){

event.preventDefault();

const empresa = document.querySelector("#empresa").value;
const cnpj = document.querySelector("#cnpj").value;
const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;
    const confirmar = document.querySelector("#confirmar").value;

    if(senha !== confirmar){

        alert("As senhas não coincidem.");

        return;

    }

    const dadosEmpresa = {

        empresa,
        cnpj,
        email,
        senha

    };

    localStorage.setItem("empresa", JSON.stringify(dadosEmpresa));

    alert("Cadastro realizado com sucesso!");

    window.location.href = "home.html";

});