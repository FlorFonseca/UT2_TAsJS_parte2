

let incrementar = () =>{
    texto.innerHTML = parseInt(texto.innerHTML) + 1
}
let boton =  document.getElementById("boton")
let texto = document.getElementById("texto")

boton.addEventListener("click",incrementar)