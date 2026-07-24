const eye = document.querySelector("#eye");
const senha = document.querySelector("#senha");

eye.addEventListener("click",()=>{

    if(senha.type==="password"){

        senha.type="text";

        eye.classList.replace("fa-eye","fa-eye-slash");

    }else{

        senha.type="password";

        eye.classList.replace("fa-eye-slash","fa-eye");

    }

});

const login = document.querySelector(".login");

login.addEventListener("submit", function(event){

    event.preventDefault();

    const email = document.querySelector('input[type="email"]').value;
    const senhaDigitada = document.querySelector("#senha").value;

    const empresa = JSON.parse(localStorage.getItem("empresa"));

    if(!empresa){

        alert("Nenhuma empresa cadastrada.");

        return;

    }

    if(email === empresa.email && senhaDigitada === empresa.senha){

        localStorage.setItem("logado","true");

        window.location.href = "dashboard.html";

    }else{

        alert("E-mail ou senha incorretos.");

    }

});