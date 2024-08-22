
const btn = document.getElementById('btnShowHide');
const texto = document.getElementById('texto');

btn.addEventListener("click", showAndHide);

function showAndHide(){ 
    if (texto.style.display === 'none') {
        texto.style.display = 'block';
    } else {
        texto.style.display = 'none';
    }
}