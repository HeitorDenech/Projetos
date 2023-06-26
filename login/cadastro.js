const input1 = document.getElementById('input1');
const password1 = document.getElementById('password1');
const date = document.getElementById('date');

const button = document.getElementById('avancar1');

button.addEventListener('submit', function(e){
    e.preventDefault
    window.localStorage.setItem('nomeUsuario', input1.value);
    // alert("Preencha todos os requisitos para avançar")
    window.location.href = "entrar.html";
})