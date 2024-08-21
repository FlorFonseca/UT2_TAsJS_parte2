function insertar(){
    let nuevoTexto = document.getElementById("palabraAInsertar").value;
    let nuevaPalabra = document.createElement("li");
    nuevaPalabra.textContent = nuevoTexto;
    document.getElementById("lista").appendChild(nuevaPalabra);

    document.getElementById("palabraAInsertar").value = "";
}

function eliminar() {
    let lista = document.getElementById("lista");
    if (lista.lastChild) {  
        lista.removeChild(lista.lastChild);
    }
}

document.getElementById("Insertar").addEventListener("click", insertar);
document.getElementById("Eliminar").addEventListener("click", eliminar);
