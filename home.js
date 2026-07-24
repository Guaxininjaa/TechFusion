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
