alert("bem vindo ao Primeiro Site do Joaozinho");

let cpfcd = ["JoaoF"]
let senhacd = ["87654321"]

function entrar(){
let cpf = document.getElementById("cpf").value;
let senha = document.getElementById("senhaa").value;
    if(cpfcd.includes(cpf) && senhacd.includes(senha)){
        alert("certo!")
        window.location.href = "https://www.youtube.com/watch?v=xwTPvcPYaOo&list=RDxwTPvcPYaOo&start_radio=1"
    }
    else{
        alert("errado")
        let cpf = document.getElementById("cpf").value = "";
        let senha = document.getElementById("senhaa").value = "";
    }
}
