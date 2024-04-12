
var almacenaje = 0;
var operacion = 0;
var toperador = "";
const tnega = '-';

function limitar() {
    let ver = false;
    if (document.getElementById("vistazo").value.length <= 9) {
        ver = true;
    }
    return ver;
}

function borra1() {
    let pantalla = "";
    pantalla = document.getElementById('vistazo').value;
    pantalla = pantalla.substring(0, pantalla.length - 1);
    document.getElementById('vistazo').value = pantalla;
}

function borrabajo() {
    document.getElementById('vistazo').value = "";
}

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

function teklarComa() {
    if (this.limitar()) {
        let pantalla = document.getElementById('vistazo').value;
        if (pantalla.includes(',')) {
            alert("Ya existe 1 decimal");
        } else {
            document.getElementById('vistazo').value += document.getElementById("bcoma").innerHTML;
        }
    } else {
        alert("Excede el límite de números")
    }
}

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
    pantalla = this.almacenaje.toString();
    toperador = '';
}

function mostrarOperaciones() {
    const calcu = document.querySelector(".contecalcu");
    const opera = document.querySelector(".operaciones");
    calcu.setAttribute("hidden", "true");
    opera.removeAttribute("hidden");
}

function mostrarCalcu() {
    const calcu = document.querySelector(".contecalcu");
    const opera = document.querySelector(".operaciones");
    opera.setAttribute("hidden", "true");
    calcu.removeAttribute("hidden");

}


function mostrarEjemplos(id) {
    var ejemplos = document.getElementById(id).getElementsByClassName("ejemplos")[0];
    var boton = document.getElementById(id).getElementsByClassName("visualizar-ejemplos")[0];
    if (ejemplos.style.display === "none") {
        ejemplos.style.display = "block";
        boton.textContent = "Ocultar Ejemplos";
    } else {
        ejemplos.style.display = "none";
        boton.textContent = "Mostrar Ejemplos";
    }
}