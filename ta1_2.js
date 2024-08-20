function insertar(){
    const palabra = document.getElementById("palabraAInsertar");
    const result = document.createElement("p");
    
    result.innerHTML = palabra.value;

}