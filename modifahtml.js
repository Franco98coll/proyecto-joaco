// Cargar el archivo JSON con los datos
fetch('datos.json')
    .then(response => response.json())
    .then(data => {
        const formulario = document.getElementById('formulario');
        const resultado = document.getElementById('resultado');

        function mostrarInformacion() {
            const indiceInput = document.getElementById('indice');
            const indice = parseInt(indiceInput.value);
        
            if (!isNaN(indice) && indice >= 0 && indice < data.length) {
                const informacion = data[indice];
                // Crear una lista de elementos para mostrar la información
                const lista = document.createElement('ul');
                for (const key in informacion) {
                    if (informacion.hasOwnProperty(key) && informacion[key] !== null) {
                        // Verificar si el valor no es null antes de mostrarlo
                        const listItem = document.createElement('li');
                        listItem.textContent = `${key}: ${informacion[key]}`;
                        lista.appendChild(listItem);
                    }
                }
                resultado.innerHTML = '';
                resultado.appendChild(lista);
            } else {
                resultado.innerHTML = 'Índice no válido.';
            }
        }
        

        formulario.addEventListener('submit', function (e) {
            e.preventDefault();
            mostrarInformacion();
        });
    });
