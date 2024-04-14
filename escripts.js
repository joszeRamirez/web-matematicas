
document.addEventListener('keydown', function (event) {
    if (event.key === 'Backspace') {
        borra1();
        document.getElementById('borra1').style.color = "white";
        document.getElementById('borra1').style.backgroundColor = "black";
    } else if (event.key === 'Delete') {
        borrabajo();
        document.getElementById('borrabajo').style.color = "white";
        document.getElementById('borrabajo').style.backgroundColor = "black";
    } else if (event.key === 'Escape') {
        borratodo();
        document.getElementById('borratodo').style.color = "white";
        document.getElementById('borratodo').style.backgroundColor = "black";
    } else if (event.key === 'Tab') {
        teklarMenos();
        document.getElementById('nega').style.color = "white";
        document.getElementById('nega').style.backgroundColor = "black";
    } else if (event.key === '.') {
        teklarComa();
        document.getElementById('bcoma').style.color = "white";
        document.getElementById('bcoma').style.backgroundColor = "black";
    } else if (event.key === 'Enter') {
        resultar();
        document.getElementById('resultado').style.color = "white";
        document.getElementById('resultado').style.backgroundColor = "black";
    } else if (event.key === '1') {
        teklar1();
        document.getElementById('1').style.color = "white";
        document.getElementById('1').style.backgroundColor = "black";
    } else if (event.key === '2') {
        teklar2();
        document.getElementById('2').style.color = "white";
        document.getElementById('2').style.backgroundColor = "black";
    } else if (event.key === '3') {
        teklar3();
        document.getElementById('3').style.color = "white";
        document.getElementById('3').style.backgroundColor = "black";
    } else if (event.key === '4') {
        teklar4();
        document.getElementById('4').style.color = "white";
        document.getElementById('4').style.backgroundColor = "black";
    } else if (event.key === '5') {
        teklar5();
        document.getElementById('5').style.color = "white";
        document.getElementById('5').style.backgroundColor = "black";
    } else if (event.key === '6') {
        teklar6();
        document.getElementById('6').style.color = "white";
        document.getElementById('6').style.backgroundColor = "black";
    } else if (event.key === '7') {
        teklar7();
        document.getElementById('7').style.color = "white";
        document.getElementById('7').style.backgroundColor = "black";
    } else if (event.key === '8') {
        teklar8();
        document.getElementById('8').style.color = "white";
        document.getElementById('8').style.backgroundColor = "black";
    } else if (event.key === '9') {
        teklar9();
        document.getElementById('9').style.color = "white";
        document.getElementById('9').style.backgroundColor = "black";
    } else if (event.key === '0') {
        teklar0();
        document.getElementById('0').style.color = "white";
        document.getElementById('0').style.backgroundColor = "black";
    } else if (event.key === '+') {
        sumar();
        document.getElementById('sumar').style.color = "white";
        document.getElementById('sumar').style.backgroundColor = "black";
    } else if (event.key === '-') {
        restar();
        document.getElementById('restar').style.color = "white";
        document.getElementById('restar').style.backgroundColor = "black";
    } else if (event.key === '*') {
        multiplicar();
        document.getElementById('multiplica').style.color = "white";
        document.getElementById('multiplica').style.backgroundColor = "black";
    } else if (event.key === '/') {
        dividir();
        document.getElementById('divide').style.color = "white";
        document.getElementById('divide').style.backgroundColor = "black";
    }
});
// Para quitar la etiqueta de estilo al dejar de presionar los botones
document.addEventListener('keyup', function (event) {
    if (event.key === 'Backspace') {
        document.getElementById('borra1').removeAttribute("style");
    } else if (event.key === 'Delete') {
        document.getElementById('borrabajo').removeAttribute("style");
    } else if (event.key === 'Escape') {
        document.getElementById('borratodo').removeAttribute("style");
    } else if (event.key === 'Tab') {
        document.getElementById('nega').removeAttribute("style");
    } else if (event.key === '.') {
        document.getElementById('bcoma').removeAttribute("style");
    } else if (event.key === 'Enter') {
        document.getElementById('resultado').removeAttribute("style");
    } else if (event.key === '1') {
        document.getElementById('1').removeAttribute("style");
    } else if (event.key === '2') {
        document.getElementById('2').removeAttribute("style");
    } else if (event.key === '3') {
        document.getElementById('3').removeAttribute("style");
    } else if (event.key === '4') {
        document.getElementById('4').removeAttribute("style");
    } else if (event.key === '5') {
        document.getElementById('5').removeAttribute("style");
    } else if (event.key === '6') {
        document.getElementById('6').removeAttribute("style");
    } else if (event.key === '7') {
        document.getElementById('7').removeAttribute("style");
    } else if (event.key === '8') {
        document.getElementById('8').removeAttribute("style");
    } else if (event.key === '9') {
        document.getElementById('9').removeAttribute("style");
    } else if (event.key === '0') {
        document.getElementById('0').removeAttribute("style");
    } else if (event.key === '+') {
        document.getElementById('sumar').removeAttribute("style");
    } else if (event.key === '-') {
        document.getElementById('restar').removeAttribute("style");
    } else if (event.key === '*') {
        document.getElementById('multiplica').removeAttribute("style");
    } else if (event.key === '/') {
        document.getElementById('divide').removeAttribute("style");
    }
});
// Variable para la sección superior de la pantalla
var almacenaje = 0;
// Variable para determinar el tipo de operación de la calculadora
var operacion = 0;
// Constante para caracter negativo
const tnega = '-';

// Limitador de dígitos en la calculadora(9)
function limitar() {
    let ver = false;
    if (document.getElementById("vistazo").value.length <= 9) {
        ver = true;
    }
    return ver;
}

// Para borrar por unidades en la sección inferior de la calculadora
function borra1() {
    let pantalla = "";
    pantalla = document.getElementById('vistazo').value;
    pantalla = pantalla.substring(0, pantalla.length - 1);
    document.getElementById('vistazo').value = pantalla;
}
// Para borrar la sección inferior de la calculadora
function borrabajo() {
    document.getElementById('vistazo').value = "";
}
// Para borrar todo el contenido de la calculadora y reiniciar la variable de operador
function borratodo() {
    document.getElementById('vistazo').value = "";
    document.getElementById('almacenaje').value = "";
    document.getElementById('operador').value = "";
    operacion = 0;
}
// Todas la funciones para agregar el número a la sección inferior de la pantalla según el botón presionado
function teklar1() {
    if (limitar()) {
        document.getElementById('vistazo').value += document.getElementById("1").innerHTML;

    } else {
        alert("Excede el límite de números");
    }
}
function teklar2() {
    if (this.limitar()) {
        document.getElementById('vistazo').value += document.getElementById("2").innerHTML;

    } else {
        alert("Excede el límite de números");
    }
}
function teklar3() {
    if (this.limitar()) {
        document.getElementById('vistazo').value += document.getElementById("3").innerHTML;

    } else {
        alert("Excede el límite de números");
    }
}
function teklar4() {
    if (this.limitar()) {
        document.getElementById('vistazo').value += document.getElementById("4").innerHTML;

    } else {
        alert("Excede el límite de números");
    }
}
function teklar5() {
    if (this.limitar()) {
        document.getElementById('vistazo').value += document.getElementById("5").innerHTML;

    } else {
        alert("Excede el límite de números");
    }
}
function teklar6() {
    if (this.limitar()) {
        document.getElementById('vistazo').value += document.getElementById("6").innerHTML;

    } else {
        alert("Excede el límite de números");
    }
}
function teklar7() {
    if (this.limitar()) {
        document.getElementById('vistazo').value += document.getElementById("7").innerHTML;

    } else {
        alert("Excede el límite de números");
    }
}
function teklar8() {
    if (this.limitar()) {
        document.getElementById('vistazo').value += document.getElementById("8").innerHTML;

    } else {
        alert("Excede el límite de números");
    }
}
function teklar9() {
    if (this.limitar()) {
        document.getElementById('vistazo').value += document.getElementById("9").innerHTML;

    } else {
        alert("Excede el límite de números");
    }
}
function teklar0() {
    if (this.limitar()) {
        document.getElementById('vistazo').value += document.getElementById("0").innerHTML;

    } else {
        alert("Excede el límite de números");
    }
}
// Para teclar el punto decimal en la calculadora
function teklarComa() {
    // Comprueba si no hay más de 9 dígitos en el input inferior
    if (this.limitar()) {
        let pantalla = document.getElementById('vistazo').value;
        // Valida si ya existe el decimal en la pantalla
        if (pantalla.includes('.')) {
            document.getElementById('bcoma').removeAttribute("style");
            alert("Ya existe 1 decimal");
            // Si no encuentra el decimal procede a lo siguiente
        } else {
            // Agrega el punto decimal al imput inferior
            document.getElementById('vistazo').value += document.getElementById("bcoma").innerHTML;
        }
        // Si excede el límite muestra el siguiente aviso
    } else {
        alert("Excede el límite de números")
    }

}
// Para convertir en negativo y viceversa el valor en la pantalla base de la calculadora
function teklarMenos() {
    // Comprueba si no hay más de 9 dígitos en el input inferior
    if (this.limitar()) {
        // Guarda en variable el input inferior
        let pantalla = document.getElementById('vistazo').value;
        // Guarda en variable el primer dígito de la variable anterior
        let coma = pantalla.charAt(0);
        // Si la variable es igual al caracter descrito hace lo siguiente
        if (coma == '-') {
            // Crea un nuevo String quitando el primer dígito del anterior mediante substring
            pantalla = pantalla.substring(1, pantalla.length);
            // Muestro en el input inferior el nuevo valor
            document.getElementById('vistazo').value = pantalla;
            // Si no encuentra el caracter descrito anteriormente, hace lo siguiente
        } else {
            // Asigna el caracter al valor tomado y lo muestra en el input inferior
            document.getElementById('vistazo').value = tnega + pantalla;
        }
        // Si excede el límite muestra el siguiente aviso
    } else {
        alert("Excede el límite de números")
    }
}
// Para realizar la suma entre los inputs almacenados
function sumar() {
    // Guardo el tipo de operación mediante un número para luego utilizarlo en la función resultado
    operacion = 1
    // Tomo los datos de cada input, los transformo a número y los guardo en variables
    almacenaje = Number(document.getElementById('almacenaje').value);
    let pantalla = Number(document.getElementById('vistazo').value);
    // Si el input de arriba tiene valor, procede a lo siguiente
    if (almacenaje != 0) {
        // Si el input de abajo tiene valor, procede a sumar
        if (pantalla != 0) {
            // Se suman ambos valores tomados y se almacena el resultado
            almacenaje = almacenaje + pantalla;
            // Si el resultado no es mayor a 9, se muestra en pantalla
            if (this.limitar()) {
                // Limpio la pantalla de abajo y muestro el resultado arriba
                document.getElementById('vistazo').value = "";
                document.getElementById('almacenaje').value = almacenaje;
            }
        }
        // Si el input de arriba no tiene valor, le paso el valor desde el input de abajo y lo limpio
    } else {
        document.getElementById('almacenaje').value = pantalla;
        document.getElementById('vistazo').value = "";
    }
    // Muestro el signo que se utiliza en esta operación dentro de un input
    document.getElementById('operador').value = "+";
}
// Para realizar la resta entre los inputs almacenados
function restar() {
    // Guardo el tipo de operación mediante un número para luego utilizarlo en la función resultado
    operacion = 2
    // Tomo los datos de cada input, los transformo a número y los guardo en variables
    almacenaje = Number(document.getElementById('almacenaje').value);
    let pantalla = Number(document.getElementById('vistazo').value);
    // Si el input de arriba tiene valor, procede a lo siguiente
    if (almacenaje != 0) {
        // Si el input de abajo tiene valor, procede a restar
        if (pantalla != 0) {
            // Se restan ambos valores tomados y se almacena el resultado
            almacenaje = almacenaje - pantalla;
            // Si el resultado no es mayor a 9, se muestra en pantalla
            if (this.limitar()) {
                // Limpio la pantalla de abajo y muestro el resultado arriba
                document.getElementById('vistazo').value = "";
                document.getElementById('almacenaje').value = almacenaje;
            }
        }
        // Si el input de arriba no tiene valor, le paso el valor desde el input de abajo y lo limpio
    } else {
        document.getElementById('almacenaje').value = pantalla;
        document.getElementById('vistazo').value = "";
    }
    // Muestro el signo que se utiliza en esta operación dentro de un input
    document.getElementById('operador').value = "-";
}
// Para realizar la multiplicación entre los inputs almacenados
function multiplicar() {
    // Guardo el tipo de operación mediante un número para luego utilizarlo en la función resultado
    operacion = 3
    // Tomo los datos de cada input, los transformo a número y los guardo en variables
    almacenaje = Number(document.getElementById('almacenaje').value);
    let pantalla = Number(document.getElementById('vistazo').value);
    // Si el input de arriba tiene valor, procede a lo siguiente
    if (almacenaje != 0) {
        // Si el input de abajo tiene valor, procede a multiplicar
        if (pantalla != 0) {
            // Se multiplican ambos valores tomados y se almacena el resultado
            almacenaje = almacenaje * pantalla;
            // Si el resultado no es mayor a 9, se muestra en pantalla
            if (this.limitar()) {
                // Limpio la pantalla de abajo y muestro el resultado arriba
                document.getElementById('vistazo').value = "";
                document.getElementById('almacenaje').value = almacenaje;
            }
        }
        // Si el input de arriba no tiene valor, le paso el valor desde el input de abajo y lo limpio
    } else {
        document.getElementById('almacenaje').value = pantalla;
        document.getElementById('vistazo').value = "";
    }
    // Muestro el signo que se utiliza en esta operación dentro de un input
    document.getElementById('operador').value = "x";
}
// Para realizar la división entre los inputs almacenados
function dividir() {
    // Guardo el tipo de operación mediante un número para luego utilizarlo en la función resultado
    operacion = 4
    // Tomo los datos de cada input, los transformo a número y los guardo en variables
    almacenaje = Number(document.getElementById('almacenaje').value);
    let pantalla = Number(document.getElementById('vistazo').value);
    // Si el input de arriba tiene valor, procede a lo siguiente
    if (almacenaje != 0) {
        // Si el input de abajo tiene valor, procede a dividir
        if (pantalla != 0) {
            // Se multiplican ambos valores tomados y se almacena el resultado
            almacenaje = almacenaje / pantalla;
            // Si el resultado no es mayor a 9, se muestra en pantalla
            if (this.limitar()) {
                // Limpio la pantalla de abajo y muestro el resultado arriba
                document.getElementById('vistazo').value = "";
                document.getElementById('almacenaje').value = almacenaje;
            }
            // Si el valor del input inferior es 0, se muestra un mensaje de aviso
        } else if (pantalla === 0) {
            document.getElementById('divide').removeAttribute("style");
            alert("Math Error: No se puede dividir para 0");
        }
        // Muestro el signo que se utiliza en esta operación dentro de un input
    } else {
        document.getElementById('almacenaje').value = pantalla;
        document.getElementById('vistazo').value = "";
    }
    // Muestro el signo que se utiliza en esta operación dentro de un input
    document.getElementById('operador').value = "/";
}
// Para mostrar el resultado de la operación según el tipo utilizado
function resultar() {
    // Se utiliza un switch con el valor de la variable operación
    switch (operacion) {
        case 1:
            sumar()
            break;
        case 2:
            restar()
            break;
        case 3:
            multiplicar()
            break;
        case 4:
            dividir()
            break;
        default:
            alert("No hay operador")
            break;
    }
    // Reinicia el tipo de operador a 0
    operacion = 0;
    document.getElementById('vistazo').value = almacenaje.toString();
    document.getElementById('operador').value = "=";
}

// Para mostrar la sección de operaciones y ocultar las demás
function mostrarOperaciones() {
    //  Constantes para guardar los divs de secciones
    const calcu = document.querySelector(".contecalcu");
    const opera = document.querySelector(".operaciones");
    const sobre = document.querySelector(".aboutus");
    // Asigna un atributo a las etiquetas para ocultarlas
    calcu.setAttribute("hidden", "true");
    sobre.setAttribute("hidden", "true");
    // Quita el atributo de ocultar a la etiqueta
    opera.removeAttribute("hidden");
}
// Para mostrar la sección de calculadora y ocultar las demás
function mostrarCalcu() {
    //  Constantes para guardar los divs de secciones
    const calcu = document.querySelector(".contecalcu");
    const opera = document.querySelector(".operaciones");
    const sobre = document.querySelector(".aboutus");
    // Asigna un atributo a las etiquetas para ocultarlas
    opera.setAttribute("hidden", "true");
    sobre.setAttribute("hidden", "true");
    // Quita el atributo de ocultar a la etiqueta
    calcu.removeAttribute("hidden");

}
// Para mostrar la sección de información y ocultar las demás
function mostrarInfo() {
    //  Constantes para guardar los divs de secciones
    const calcu = document.querySelector(".contecalcu");
    const opera = document.querySelector(".operaciones");
    const sobre = document.querySelector(".aboutus");
    // Asigna un atributo a las etiquetas para ocultarlas
    calcu.setAttribute("hidden", "true");
    opera.setAttribute("hidden", "true");
    // Quita el atributo de ocultar a la etiqueta
    sobre.removeAttribute("hidden");
}
// Para mostrar-ocultar los botones de los ejemplos 
function mostrarEjemplos(id) {
    var ejemplos = document.getElementById(id).getElementsByClassName("ejemplos")[0];
    var boton = document.getElementById(id).getElementsByClassName("visualizar-ejemplos")[0];
    // Comprueba si los ejemplos están ocultos o visibles.
    if (ejemplos.style.display === "none") {
        ejemplos.style.display = "block";
        boton.textContent = "Ocultar Ejemplos";
        // Si están visibles, los oculta
    } else {
        ejemplos.style.display = "none";
        boton.textContent = "Mostrar Ejemplos";
    }
}