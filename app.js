// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo){
        amigos.push(nombreAmigo);
        mostrarLista();
        limpiarCaja();
    } else {
        alert('Debes ingresar un nombre');
    }
}

function mostrarLista(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        listaAmigos.innerHTML += `<li>${amigo}</li>`;
    });
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert('No hay ningun amigo que sortear');
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarResultado(amigoSorteado);
    limpiarLista();
}

function mostrarResultado(amigo){
    let resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = `El amigo sorteado fue: ${amigo}`;
}

function limpiarCaja(){
    document.getElementById('amigo').value = '';
}

function limpiarLista(){
    amigos = [];
    mostrarLista();
}

function condicionesIniciales(){
    document.getElementById('listaAmigos').innerHTML = '';
    amigos = [];
}

condicionesIniciales();