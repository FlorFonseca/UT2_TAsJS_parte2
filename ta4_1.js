
const palabra = document.getElementById("palabraAInsertar");

palabra.addEventListener('focus', () => {
    palabra.style.borderBlockColor = 'red';
    palabra.style.backgroundColor = 'darkgray'; 
});


palabra.addEventListener('blur', () => {
    palabra.style.backgroundColor = 'white';
    palabra.style.borderBlockColor = 'black'; 
}); 




