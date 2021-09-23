var app = new Vue({
  el: '#app',
  data: {
    cargo: "",
    pin: "",
    estadoLogin: true,
    estadoAdmin: false,
    estadoSec: false,
    estadoVend: false,
    estadoEns: false,
    salario: null,
    canMax: null,
    prEnsamble: null,
    comision: null,
    arrayDatos: [
      { cargo: "A", pin: "1230", car: "Administrador", salarioBase:"2000000"},
      { cargo: "S", pin: "1231", car: "Secretario", salarioBase:"1600000"},
      { cargo: "V", pin: "1232", car: "Vendedor", salarioBase:"1400000"},
      { cargo: "E", pin: "1233", car: "Ensamblador", salarioBase:"1200000"},
    ],
    


  },
  methods: {
    validarLogin() {
      for (let i = 0; i < this.arrayDatos.length; i++) {
        if (this.cargo == this.arrayDatos[i].cargo) {
          if (this.pin == this.arrayDatos[i].pin) {
            this.mensaje('Bienvenido!', 'Has ingresado al perfil ' + this.arrayDatos[i].car, 'success');
            // this.estado = false;
            this.Perfiles();
          } else {
            this.mensaje('Sin acceso!', 'Ingrese un PIN válido', 'error');
          }
        }
      }
      this.valDataLogin();
    },
    valDataLogin() {
      if (this.cargo == "") {
        this.mensaje('Error en datos!', 'No has seleccionado un cargo', 'error');
      } else if (this.pin == "") {
        this.mensaje('Error en datos!', 'Por favor ingresa tu PIN ', 'error');
      }
    },
    Perfiles(){
      if(this.cargo=="A"){
        this.estadoLogin = false;
        this.estadoAdmin = true;
      }else if(this.cargo=="S"){
        this.estadoLogin=false;
        this.estadoSec=true;
      }else if(this.cargo=="V"){
        this.estadoLogin=false;
        this.estadoVend=true;
      }else{
        this.cargo=="E"
        this.estadoLogin=false;
        this.estadoEns=true;
      }


    },
    salir(){
      this.estadoLogin=true;
      this.estadoAdmin = false;
      this.estadoSec=false;
      this.estadoVend=false;
      this.estadoEns=false;
    },
    mensaje(titulo, msj, icono) {
      Swal.fire(
        titulo,
        msj,
        icono
      )
    }


  }
});