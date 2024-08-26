// Lista de nombres en JavaScript
const nombres = ['Carlos', 'Ana', 'María', 'Luis', 'Laura', 'Pedro'];

// Función para generar la lista en el HTML
function generarLista() {
    const lista = document.getElementById('lista');
    lista.innerHTML = ''; // Limpiar la lista antes de agregar los elementos

    nombres.forEach(function(nombre) {
        const li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Llamada para generar la lista al cargar la página
generarLista();

// Evento para filtrar la lista en tiempo real
document.getElementById('search').addEventListener('input', function() {
    const filtro = this.value.toLowerCase();
    const elementos = document.querySelectorAll('#lista li');

    elementos.forEach(function(el) {
        if (el.textContent.toLowerCase().includes(filtro)) {
            el.style.display = '';
        } else {
            el.style.display = 'none';
        }
    });
});
