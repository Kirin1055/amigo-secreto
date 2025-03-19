const amigoUsuario = document.getElementById("amigo");
const listaAmigos = [];
const laListaAmigos = document.getElementById("listaAmigos");
const elResultado = document.getElementById("resultado");

function agregarAmigo() {
    listaAmigos.push(amigoUsuario.value);

    laListaAmigos.innerHTML += `<li>${amigoUsuario.value}<li>`;

}

function sortearAmigo() {
const random = Math.floor(Math.random() * listaAmigos.length);
const amigoSecreto = listaAmigos[random];
elResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}<li>`;

}
