const form = document.getElementById('registroForm');
const btn = document.querySelector('.btn-enviar');
const tituloForm = document.querySelector('h2'); 

form.addEventListener('submit', function(event) {
    
    event.preventDefault();

    alert("Los datos fueron enviados correctamente");

    tituloForm.style.color = "#28a745"; 
    
    tituloForm.textContent = "¡Formulario Enviado!"; 

    form.reset(); 
});