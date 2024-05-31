document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(e) {
        e.preventDefault();
        // let numeroMaximo = parseInt(document.getElementById('numero-maximo')); menos legivel
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);
        // alert(numeroAleatorio); para testar

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})