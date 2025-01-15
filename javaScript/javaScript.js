document.getElementById('codeForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío real del formulario

  const code = document.getElementById('code').value.trim();
  const messageDiv = document.getElementById('message');

  // Expresión regular para validar el código
  const codeRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,10}$/;

  if (codeRegex.test(code)) {
    messageDiv.textContent = 'Código correcto. ¡Envío exitoso!';
    messageDiv.className = 'message success';
    messageDiv.style.display = 'block';
  } else {
    messageDiv.textContent = 'Código incorrecto. Asegúrese de que tenga entre 8 y 10 caracteres, incluyendo al menos una letra mayúscula y un número.';
    messageDiv.className = 'message error';
    messageDiv.style.display = 'block';
  }
});

  // Menu Responsive
  
  function toggleMenu() {
    const nav = document.querySelector('.header__nav');
    nav.classList.toggle('header__nav--active');
  }
  