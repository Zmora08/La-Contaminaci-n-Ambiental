document.getElementById('poll-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Sumamos los valores para dar un diagnóstico
    let totalScore = 0;
    const formData = new FormData(this);
    
    for (let value of formData.values()) {
        totalScore += parseInt(value);
    }

    // Ocultar formulario y mostrar resultado
    document.getElementById('poll-form').classList.add('hidden');
    const resultadoDiv = document.getElementById('resultado');
    const mensajeP = document.getElementById('mensaje-final');
    
    resultadoDiv.classList.remove('hidden');

    if (totalScore >= 12) {
        mensajeP.innerText = "Eres un verdadero Guardián del Planeta. ¡Tu conciencia ambiental es admirable!";
    } else if (totalScore >= 7) {
        mensajeP.innerText = "Tienes buenos hábitos, pero aún hay pequeños cambios que pueden hacer una gran diferencia.";
    } else {
        mensajeP.innerText = "Parece que el planeta necesita un poco más de tu ayuda. ¡Empieza hoy mismo!";
    }
});

//nuevo apartado......................................................................................

document.addEventListener('DOMContentLoaded', () => {
    const importanciaSection = document.querySelector('.importancia-seccion');
    const elementosAnimados = document.querySelectorAll('.elemento-animado');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                elementosAnimados.forEach(el => el.style.animationPlayState = 'running');
            } else {
                elementosAnimados.forEach(el => el.style.animationPlayState = 'paused');
            }
        });
    }, { threshold: 0.5 }); // La animación se activa cuando el 50% de la sección es visible

    observer.observe(importanciaSection);
});