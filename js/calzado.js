var app = new Vue({
  el: '#app',
  data: {
    cargo: "",
    cargos: "",
    pin: "",
    estadoLogin: true,
    estadoAdmin: false,
    estadoSec: false,
    estadoVend: false,
    estadoEns: false,
    canMax: null,
    prEnsamble: null,
    comision: null,
    salarioBase: null,
    salarioAdm: 2000000,
    salarioSec: 950000,
    salarioVen: 1100000,
    salarioEns: 1400000,
    nSalario: "",
    verTabla: false,
    valHoraExt: 0,
    valHora: 0,
    cantHoras: 0,
    totExtra: 0,
    totFinal: 0,
    arrayLogin: [
      { cargo: "A", pin: "1", nombre: "Administrador"},
      { cargo: "S", pin: "2", nombre: "Secretario"},
      { cargo: "V", pin: "3", nombre: "Vendedor"},
      { cargo: "E", pin: "4", nombre: "Ensamblador"},
    ],
    arrayDatos:[]
  },
  methods: {
    validarLogin() {
      for (let i = 0; i < this.arrayLogin.length; i++) {
        if (this.cargo == this.arrayLogin[i].cargo) {
          if (this.pin == this.arrayLogin[i].pin) {
            this.mensajeModal(this.arrayLogin[i].nombre);
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
        this.salarioSec;
      }else if(this.cargo=="V"){
        this.estadoLogin=false;
        this.estadoVend=true;
      }else{
        this.cargo=="E"
        this.estadoLogin=false;
        this.estadoEns=true;
      }

     },
     getSalario(){
      if(this.cargos=="A"){
        this.salarioBase=this.salarioAdm;
      }
      if(this.cargos=="S"){
        this.salarioBase=this.salarioSec;
      }
      if(this.cargos=="V"){
        this.salarioBase=this.salarioVen;
      }
      if(this.cargos=="E"){
        this.salarioBase=this.salarioEns;
      }
    },
    modificarSalario(){
      this.salarioBase=this.nSalario;
      this.nSalario = null;
    },
    actualizarDatos(){
      this.arrayDatos.push({
        cant:this.canMax,
        precio:this.prEnsamble,
        comision:this.comision
      });
      this.verTabla=true;
      this.estadoAdmin=false;
    },
    regresar(){
      this.verTabla=false;
      this.estadoAdmin=true;
    },
    salir(){
      this.estadoLogin=true;
      this.estadoAdmin=false;
      this.estadoSec=false;
      this.estadoVend=false;
      this.estadoEns=false;
      this.pin="";
      this.cargo="";
    },
    mensaje(titulo, msj, icono) {
      Swal.fire(
        titulo,
        msj,
        icono
      )
    },
    mensajeModal(nombre){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Has ingresado correctamente al cargo: ' + nombre,
        showConfirmButton: false,
        timer: 2500
      })
    },
    calcularSalario(){
      this.valHora = (this.salarioSec/30)/8;
      this.valHoraExt = this.valHora * 1.8;
      this.totExtra = this.valHoraExt * this.cantHoras;
      this.totFinal = this.salarioSec + this.totExtra;
    }
  },
  computed:{    
  }
});