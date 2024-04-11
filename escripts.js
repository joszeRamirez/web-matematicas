
  var toperador ="";
  const tcoma = '.';
  const tnega = '-';
  const pantalla = "";
  var almacenaje = 0;
  var operacion = 0;

 function limitar() {
    let ver = false;
    if (document.getElementById("vistazo").value.length <= 9) {
      ver = true;
    }
    return ver;
  }

  function borra1() {
    this.pantalla = this.pantalla.substring(0, this.pantalla.length - 1)
  }

  function borrabajo() {
    this.pantalla = ""
  }

  function borratodo() {
    this.pantalla = ""
    this.almacenaje = 0
    this.toperador = ''
  }

  function teklar1() {
    if (limitar()) {
      document.getElementById('vistazo').value += document.getElementById("1").innerHTML;
        // pantalla += t1;
      
      console.log("si vale")
    } else {
      alert("Excede el límite de números")
    }
  }
  function teklar2() {
    if (this.limitar()) {
        document.getElementById('vistazo').value += document.getElementById("2").innerHTML;
      console.log(this.pantalla)
    } else {
      alert("Excede el límite de números")
    }
  }
  function teklar3() {
    if (this.limitar()) {
        document.getElementById('vistazo').value += document.getElementById("3").innerHTML;
      console.log(this.pantalla)
    } else {
      alert("Excede el límite de números")
    }
  }
  function teklar4() {
    if (this.limitar()) {
        document.getElementById('vistazo').value += document.getElementById("4").innerHTML;
      console.log(this.pantalla)
    } else {
      alert("Excede el límite de números")
    }
  }
  function teklar5() {
    if (this.limitar()) {
        document.getElementById('vistazo').value += document.getElementById("5").innerHTML;
      console.log(this.pantalla)
    } else {
      alert("Excede el límite de números")
    }
  }
  function teklar6() {
    if (this.limitar()) {
        document.getElementById('vistazo').value += document.getElementById("6").innerHTML;
      console.log(this.pantalla)
    } else {
      alert("Excede el límite de números")
    }
  }
  function teklar7() {
    if (this.limitar()) {
        document.getElementById('vistazo').value += document.getElementById("7").innerHTML;
      console.log(this.pantalla)
    } else {
      alert("Excede el límite de números")
    }
  }
  function teklar8() {
    if (this.limitar()) {
        document.getElementById('vistazo').value += document.getElementById("8").innerHTML;
      console.log(this.pantalla)
    } else {
      alert("Excede el límite de números")
    }
  }
  function teklar9() {
    if (this.limitar()) {
        document.getElementById('vistazo').value += document.getElementById("9").innerHTML;
      console.log(this.pantalla)
    } else {
      alert("Excede el límite de números")
    }
  }
  function teklar0() {
    if (this.limitar()) {
        document.getElementById('vistazo').value += document.getElementById("0").innerHTML;
      console.log(this.pantalla)
    } else {
      alert("Excede el límite de números")
    }
  }

  function teklarComa() {
    if (this.limitar()) {
      if (this.pantalla.includes('.')) {
        alert("Ya existe 1 decimal")
      } else {
        document.getElementById('vistazo').value += document.getElementById(",").innerHTML;
        console.log(this.pantalla)
      }
    } else {
      alert("Excede el límite de números")
    }
  }

  function teklarMenos() {
    if (this.limitar()) {
      let coma = this.pantalla.charAt(0);
      if (coma == '-') {
        this.pantalla = this.pantalla.substring(1, this.pantalla.length)
        console.log(this.pantalla)
      } else {
        this.pantalla = this.tnega + this.pantalla;
        console.log(this.pantalla)
      }

    } else {
      alert("Excede el límite de números")
    }
  }

  function sumar() {
    this.operacion = 1
    if (this.almacenaje != 0) {
      this.almacenaje = this.almacenaje + Number(this.pantalla)
      if (this.limitar()) {
        this.pantalla = this.almacenaje.toString()
      }
    } else {
      this.almacenaje = Number(this.pantalla)
      this.pantalla = ""
    }
    this.toperador = "+"
  }
  function restar() {
    this.operacion = 2
    if (this.almacenaje != 0) {
      this.almacenaje = this.almacenaje - Number(this.pantalla)
      if (this.limitar()) {
        this.pantalla = this.almacenaje.toString()
      }
    } else {
      this.almacenaje = Number(this.pantalla)
      this.pantalla = ""
    }
    this.toperador = "-"
  }
  function multiplicar() {
    this.operacion = 3
    if (this.almacenaje != 0) {
      this.almacenaje = this.almacenaje * Number(this.pantalla)
      if (this.limitar()) {
        this.pantalla = this.almacenaje.toString()
      }
    } else {
      this.almacenaje = Number(this.pantalla)
      this.pantalla = ""
    }
    this.toperador = "x"
  }
  function dividir() {
    this.operacion = 4
    if (this.almacenaje != 0) {
      this.almacenaje = this.almacenaje / Number(this.pantalla)
      if (this.limitar()) {
        this.pantalla = this.almacenaje.toString()
      }
    } else {
      this.almacenaje = Number(this.pantalla)
      this.pantalla = ""
    }
    this.toperador = "/"
  }
  function resultar() {
    switch (this.operacion) {
      case 1:
        this.sumar()
        break;
      case 2:
        this.restar()
        break;
      case 3:
        this.multiplicar()
        break;
      case 4:
        this.dividir()
        break;
      default:
        alert("No hay operador")
        break;
    }
    this.operacion = 0
    this.pantalla = this.almacenaje.toString()
    this.toperador = '';
  }