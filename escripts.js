  t1 = "1"
  t2 = '2'
  t3 = '3'
  t4 = '4'
  t5 = '5'
  t6 = '6'
  t7 = '7'
  t8 = '8'
  t9 = '9'
  t0 = '0'
  toperador??= string
  tcoma = '.'
  tnega = '-'
  pantalla: string = "";
  almacenaje: number = 0;
  operacion: number = 0;

  limitar() {
    let ver = false;
    if (this.pantalla.length <= 9) {
      ver = true;
    }
    return ver;
  }

  borra1() {
    this.pantalla = this.pantalla.substring(0, this.pantalla.length - 1)
  }

  borrabajo() {
    this.pantalla = ""
  }

  borratodo() {
    this.pantalla = ""
    this.almacenaje = 0
    this.toperador = ''
  }

  teklar1() {
    if (this.limitar()) {
      this.pantalla += this.t1;
      console.log(this.pantalla)
    } else {
      alert("Excede el límite de números")
    }
  }
  teklar2() {
    if (this.limitar()) {
      this.pantalla += this.t2;
      console.log(this.pantalla)
    } else {
      alert("Excede el límite de números")
    }
  }
  teklar3() {
    if (this.limitar()) {
      this.pantalla += this.t3;
      console.log(this.pantalla)
    } else {
      alert("Excede el límite de números")
    }
  }
  teklar4() {
    if (this.limitar()) {
      this.pantalla += this.t4;
      console.log(this.pantalla)
    } else {
      alert("Excede el límite de números")
    }
  }
  teklar5() {
    if (this.limitar()) {
      this.pantalla += this.t5;
      console.log(this.pantalla)
    } else {
      alert("Excede el límite de números")
    }
  }
  teklar6() {
    if (this.limitar()) {
      this.pantalla += this.t6;
      console.log(this.pantalla)
    } else {
      alert("Excede el límite de números")
    }
  }
  teklar7() {
    if (this.limitar()) {
      this.pantalla += this.t7;
      console.log(this.pantalla)
    } else {
      alert("Excede el límite de números")
    }
  }
  teklar8() {
    if (this.limitar()) {
      this.pantalla += this.t8;
      console.log(this.pantalla)
    } else {
      alert("Excede el límite de números")
    }
  }
  teklar9() {
    if (this.limitar()) {
      this.pantalla += this.t9;
      console.log(this.pantalla)
    } else {
      alert("Excede el límite de números")
    }
  }
  teklar0() {
    if (this.limitar()) {
      this.pantalla += this.t0;
      console.log(this.pantalla)
    } else {
      alert("Excede el límite de números")
    }
  }

  teklarComa() {
    if (this.limitar()) {
      if (this.pantalla.includes('.')) {
        alert("Ya existe 1 decimal")
      } else {
        this.pantalla += this.tcoma;
        console.log(this.pantalla)
      }
      // document.getElementById('bcoma')
    } else {
      alert("Excede el límite de números")
    }
  }

  teklarMenos() {
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

  sumar() {
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
  restar() {
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
  multiplicar() {
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
  dividir() {
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
  resultar() {
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