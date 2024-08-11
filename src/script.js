function envioForm(event){
    event.preventDefault();


    alert("Obrigado por testar meu formulário! =)");

}

document.getElementById("form_action").addEventListener("submit", envioForm);