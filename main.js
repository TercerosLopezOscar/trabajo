function cambiarColor() {
    // Obtén el botón por su ID
    var boton = document.getElementsByClassName("miBoton");
    console.log(boton);
    for (let index = 0; index < boton.length; index++) {
        const element = boton[index];
        var nuevoColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
        // Cambia el color de fondo del botón
        element.style.backgroundColor = nuevoColor;
        
    }
  }

  
 //---------------------------------------------------------------------------------------------------------

  function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Actualiza el reloj cada segundo
setInterval(updateClock, 1000);

// Inicializa el reloj al cargar la página
updateClock();

 //---------------------------------------------------------------------------------------------------------
 function cambiarParrafo() {
    // Obtén todos los elementos <p> en la página
    const parrafos = document.querySelectorAll('p');

    // Recorre cada párrafo y cambia su color a uno aleatorio
    parrafos.forEach(function(parrafo) {
        // Genera un color aleatorio en formato hexadecimal
        const colorAleatorio = '#' + Math.floor(Math.random()*16777215).toString(16);

        // Cambia el color del párrafo
        parrafo.style.color = colorAleatorio;
    });
}