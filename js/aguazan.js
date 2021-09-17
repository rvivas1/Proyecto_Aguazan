var app = new Vue({
    el: '#app',
    data: {
        opcEst: 0,
        nombre: "",
        estrato: 0,
        cantm3: "",
        cargfijo1: 2300,
        cargfijo2: 3200,
        cargfijo3: 3900,
        vmtCub1: 250,
        vmtCub2: 350,
        vmtCub3: 460,
        sub1: 0.4,
        sub2: 0.3,
        sub3: 0.1,
        total: 0,
        arrayFactura: [],
        valorM3Final: 0,
        subFinal: 0,
        cargoFinal: 0,
        promed1: 0,
        promed2: 0,
        promed3: 0,
        totalEstr1: 0,
        totalM3_1: 0,
        totalEstr2: 0,
        totalM3_2: 0,
        totalEstr3: 0,
        totalM3_3: 0,
        totalGlobal: 0,
        i: 0,
        j: 0,
        k: 0
    },
    methods: {
        getValor() {
            if (this.opcEst == "1") {
                this.estrato = "1";
            } else if (this.opcEst == "2") {
                this.estrato = "2";
            } else {
                this.estrato = "3";
            }
        },
        facturar() {
            this.getValor();
            if (this.estrato == "1") {
                this.i+=1;
                this.total = this.cargfijo1 - (this.cargfijo1 * this.sub1) + (this.cantm3 * this.vmtCub1);
                this.subFinal = this.sub1 * 100 + "%";
                this.valorM3Final = this.vmtCub1;
                this.cargoFinal = this.cargfijo1;
                this.totalEstr1 += this.total;
                this.totalGlobal += this.totalEstr1;
                this.totalM3_1 += this.cantm3;
                this.promed1=this.totalM3_1/this.i;
            }
            else if (this.estrato == "2") {
                this.j+=1;
                this.total = this.cargfijo2 - (this.cargfijo2 * this.sub2) + (this.cantm3 * this.vmtCub2);
                this.subFinal = this.sub2 * 100 + "%";
                this.valorM3Final = this.vmtCub2;
                this.cargoFinal = this.cargfijo2;
                this.totalEstr2 += this.total;
                this.totalGlobal += this.totalEstr2;
                this.totalM3_2 += this.cantm3;
                this.promed2=this.totalM3_2/this.j;
            }
            else {
                this.k+=1;
                this.total = this.cargfijo3 - (this.cargfijo3 * this.sub3) + (this.cantm3 * this.vmtCub3);
                this.subFinal = this.sub3 * 100 + "%";
                this.valorM3Final = this.vmtCub3;
                this.cargoFinal = this.cargfijo3;
                this.totalEstr3 += this.total;
                this.totalGlobal += this.totalEstr3;
                this.totalM3_3 += this.cantm3;
                this.promed3=this.totalM3_3/this.k;
            }
            this.agregarDetalle();
        },
        agregarDetalle() {
            this.arrayFactura.push({ 
                nombre: this.nombre, 
                estrato: this.estrato, 
                cargofijo: this.cargoFinal, 
                consumo: this.cantm3, 
                valor: this.valorM3Final, 
                sub: this.subFinal, 
                total: this.total });
        }
    }
});