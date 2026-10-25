        const formPedido = document.getElementById('formPedido');
        const modalAlerta = document.getElementById('modalAlerta');

        // Cuando se da clic en "Registrar"
        formPedido.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que la página se recargue
            modalAlerta.style.display = 'flex'; // Muestra la alerta emergente
        });

        // Función para cerrar la alerta al dar clic en "ok"
        function cerrarAlerta() {
            modalAlerta.style.display = 'none';
            formPedido.reset(); // Opcional: reinicia el formulario
        }