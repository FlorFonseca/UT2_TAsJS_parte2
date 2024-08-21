function insertar(){
    let nuevoTexto = document.getElementById("palabraAInsertar").value;
    let nuevaPalabra = document.createElement("li");
    nuevaPalabra.textContent = nuevoTexto;
    document.getElementById("lista").appendChild(nuevaPalabra);

    document.getElementById("palabraAInsertar").value = "";
}

document.getElementById("Insertar").addEventListener("click", insertar);