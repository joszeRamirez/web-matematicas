
var almacenaje = 0;
var operacion = 0;
var toperador = "";
const tnega = '-';

// Limitador de dígitos en la calculadora(9)
function limitar() {
    let ver = false;
    if (document.getElementById("vistazo").value.length <= 9) {
        ver = true;
    }
    return ver;
}
// Para borrar por unidades en la calculadora
function borra1() {
    let pantalla = "";
    pantalla = document.getElementById('vistazo').value;
    pantalla = pantalla.substring(0, pantalla.length - 1);
    document.getElementById('vistazo').value = pantalla;
}
// Para borrar la sección base de la calculadora
function borrabajo() {
    document.getElementById('vistazo').value = "";
}
// Para borrar todo el contenido de la calculadora
function borratodo() {
    document.getElementById('vistazo').value = "";
    document.getElementById('almacenaje').value = "";
    toperador = '';
}

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
    if (this.limitar()) {
        let pantalla = document.getElementById('vistazo').value;
        // Valida si ya existe el decimal en la pantalla
        if (pantalla.includes(',')) {
            alert("Ya existe 1 decimal");
        } else {
            document.getElementById('vistazo').value += document.getElementById("bcoma").innerHTML;
        }
    } else {
        alert("Excede el límite de números")
    }
}
// Para convertir en negativo y viceversa el valor en la pantalla base de la calculadora
function teklarMenos() {
    if (this.limitar()) {
        let pantalla = document.getElementById('vistazo').value;
        let coma = pantalla.charAt(0);
        if (coma == '-') {
            pantalla = pantalla.substring(1, pantalla.length);
            document.getElementById('vistazo').value = pantalla;
            console.log(pantalla)
        } else {
            document.getElementById('vistazo').value = tnega + pantalla;
            console.log(pantalla)
        }

    } else {
        alert("Excede el límite de números")
    }
}

function sumar() {
    operacion = 1
    almacenaje = parseFloat(document.getElementById('almacenaje').value);
    console.log("valor almacenado " + almacenaje + typeof almacenaje);
    let pantalla = parseFloat(document.getElementById('vistazo').value);
    console.log("valor pantalla " + pantalla + typeof pantalla)
    if (!isNaN(almacenaje)) {
        almacenaje = almacenaje + pantalla;
        console.log("valor almacenado " + almacenaje + typeof almacenaje);
        if (this.limitar()) {
            document.getElementById('vistazo').value = almacenaje;
            document.getElementById('almacenaje').value = pantalla;
        }
    } else {
        document.getElementById('almacenaje').value = pantalla;
        document.getElementById('vistazo').value = "";
    }
    toperador = "+"
}
function restar() {
    operacion = 2
    almacenaje = parseFloat(document.getElementById('almacenaje').value);
    let pantalla = parseFloat(document.getElementById('vistazo').value);
    if (!isNaN(almacenaje)) {
        almacenaje = almacenaje - pantalla;
        console.log("valor almacenado " + almacenaje + typeof almacenaje);
        if (this.limitar()) {
            document.getElementById('vistazo').value = almacenaje;
            document.getElementById('almacenaje').value = pantalla;
        }
    } else {
        document.getElementById('almacenaje').value = pantalla;
        document.getElementById('vistazo').value = "";
    }
    toperador = "-"
}
function multiplicar() {
    operacion = 3
    almacenaje = parseFloat(document.getElementById('almacenaje').value);
    let pantalla = parseFloat(document.getElementById('vistazo').value);
    if (!isNaN(almacenaje)) {
        almacenaje = almacenaje * pantalla;
        console.log("valor almacenado " + almacenaje + typeof almacenaje);
        if (this.limitar()) {
            document.getElementById('vistazo').value = almacenaje;
            document.getElementById('almacenaje').value = pantalla;
        }
    } else {
        document.getElementById('almacenaje').value = pantalla;
        document.getElementById('vistazo').value = "";
    }
    toperador = "x"
}
function dividir() {
    operacion = 4
    almacenaje = parseFloat(document.getElementById('almacenaje').value);
    let pantalla = parseFloat(document.getElementById('vistazo').value);
    if (!isNaN(almacenaje)) {
        almacenaje = almacenaje / pantalla;
        console.log("valor almacenado " + almacenaje + typeof almacenaje);
        if (this.limitar()) {
            document.getElementById('vistazo').value = almacenaje;
            document.getElementById('almacenaje').value = pantalla;
        }
    } else {
        document.getElementById('almacenaje').value = pantalla;
        document.getElementById('vistazo').value = "";
    }
    toperador = "/"
}
function resultar() {
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
    operacion = 0;
    pantalla = almacenaje.toString();
    toperador = '';
}

// Para mostrar la sección de operaciones y ocultar las demás
function mostrarOperaciones() {
    //  Constantes para guardar los divs de secciones
    const calcu = document.querySelector(".contecalcu");
    const opera = document.querySelector(".operaciones");
    const sobre = document.querySelector(".aboutus");
    calcu.setAttribute("hidden", "true");
    sobre.setAttribute("hidden", "true");
    opera.removeAttribute("hidden");
}
// Para mostrar la sección de calculadora y ocultar las demás
function mostrarCalcu() {
    //  Constantes para guardar los divs de secciones
    const calcu = document.querySelector(".contecalcu");
    const opera = document.querySelector(".operaciones");
    const sobre = document.querySelector(".aboutus");
    opera.setAttribute("hidden", "true");
    sobre.setAttribute("hidden", "true");
    calcu.removeAttribute("hidden");

}
// Para mostrar la sección de información y ocultar las demás
function mostrarInfo() {
    //  Constantes para guardar los divs de secciones
    const calcu = document.querySelector(".contecalcu");
    const opera = document.querySelector(".operaciones");
    const sobre = document.querySelector(".aboutus");
    calcu.setAttribute("hidden", "true");
    opera.setAttribute("hidden", "true");
    sobre.removeAttribute("hidden");
}

// Para mostrar-ocultar los botones de los ejemplos 
function mostrarEjemplos(id) {
    var ejemplos = document.getElementById(id).getElementsByClassName("ejemplos")[0];
    var boton = document.getElementById(id).getElementsByClassName("visualizar-ejemplos")[0];
    if (ejemplos.style.display === "none") {
         // Comprueba si los ejemplos están ocultos o visibles.
        ejemplos.style.display = "block";
        boton.textContent = "Ocultar Ejemplos";
    } else {
        // Si están visibles, los oculta
        ejemplos.style.display = "none";
        boton.textContent = "Mostrar Ejemplos";
    }
}