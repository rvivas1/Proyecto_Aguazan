var app = new Vue({
  el: '#app',
  data: {
    nombre: "",
    nMecanico: "",
    apellido: "",
    ident: "",
    telefono: "",
    tipo: "",
    placa: "",
    opcion1: false,
    opcion2: false,
    opcion3: false,
    opcion4: false,
    opcion5: false,
    opcion6: false,
    opcion7: false,
    boton: 1,
    estado: 1,
    isPrecios: 0,
    clientePref: 0,
    lavGeneral: 0,
    lavPresion: 0,
    encerada: 0,
    polichada: 0,
    servComp: 0,
    mecAutom: 0,
    camAceite: 0,
    manObra: null,
    valorServ:null,
    costRep:null,
    desc: 0.9,
    total: 0,
    tPagar: 0,
    arrayDatos: [],
    arrayAdicional: [],
    arrayFactura: [],
    arrayVehiculo:[]

  },
  methods:{
    verTabla(){
      this.boton = 0;
      this.isPrecios =1;
    },
    ocultarTabla(){
      this.boton = 1;
      this.isPrecios = 0;
    },
    generarPrecio(){
      this.estado=0;
      this.llenarDatos();
      this.datosVehiculo();
      if(this.opcion1==true){
        this.lavGeneral=30000;
      }else{
        this.lavGeneral=0;
      }
      if(this.opcion2==true){
        this.lavPresion=25000;
      }else{
        this.lavPresion=0;
      }
      if(this.opcion3==true){
        this.encerada=15000;
      }else{
        this.encerada=0;
      }
      if(this.opcion4==true){
        this.polichada=18000;
      }else{
        this.polichada=0;
      }
      if(this.opcion5==true){
        this.servComp=80000;
      }else{
        this.servComp=0;
      }
      if(this.opcion6==true){
        this.mecAutom=30000;
      }else{
        this.mecAutom=0;
      }
      if(this.opcion7==true){
        this.camAceite=6000;
      }else{
        this.camAceite=0;
      }
      this.totales();
      this.llenarFactura();
      this.llenarAdicional();
    },
    totales(){
      this.total = this.lavGeneral + 
     this.lavPresion + this.encerada +
      this.polichada + this.servComp + 
      this.mecAutom + this.camAceite + 
      this.manObra + this.valorServ + 
      this.costRep;
      if(this.clientePref==1){
        this.tPagar= this.total*0.9;
      }
      else {
        this.tPagar = this.total;
      }
    },
    llenarDatos(){
      this.arrayDatos.push({
        nomb:this.nombre,
         apell:this.apellido,
         ident:this.ident,
         tel:this.telefono
        });
    },
    datosVehiculo(){
      this.arrayVehiculo.push({
        tipo:this.tipo,
        placa:this.placa
      });

    },
    llenarFactura(){
      this.arrayFactura.push({
        lGen:this.lavGeneral,
        lPres:this.lavPresion,
        encer:this.encerada,
        poli:this.polichada,
        servC:this.servComp,
        total:this.tPagar
      });
    },
    llenarAdicional(){
      this.arrayAdicional.push({
        nombre:this.nMecanico,
        mAutM:this.mecAutom,
        cambAc:this.camAceite,
        mObra:this.manObra,
        vServ:this.valorServ,
        cRep:this.costRep
      });
    },
    eliminar(){
      Swal.fire({
        title: 'Está seguro?',
        text: "Esta accion es irreversible!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, Eliminar!',
        cancelButtonText: 'Cancelar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Eliminado!',
            'Se eliminó correctamente.',
            'success'
          )
        }
      });
    
    },
    retornar(){
      this.estado=1;
    }
    

  },
  computed:{
    // totalSuma: function(){

    // }
  }
  
});