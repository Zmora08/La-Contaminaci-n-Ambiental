function abrirPagos(event) {
    if(event) event.preventDefault();
    document.getElementById("modalDonacion").style.display = "block";
    document.body.style.overflow = "hidden"; // Bloquea el scroll del fondo
}

// Función para cerrar el modal
function cerrarPagos() {
    document.getElementById("modalDonacion").style.display = "none";
    document.body.style.overflow = "auto"; // Libera el scroll
}

// Cerrar si hacen clic fuera de la caja
window.onclick = function(event) {
    let modal = document.getElementById("modalDonacion");
    if (event.target == modal) {
        cerrarPagos();
    }
}

// Simulación de carga
function mostrarMensaje() {
    let msg = document.getElementById("mensaje-banco");
    msg.style.display = "block";
    setTimeout(() => {
        msg.innerText = "Error de conexión: Por favor configure su pasarela de pago real.";
    }, 2000);
}