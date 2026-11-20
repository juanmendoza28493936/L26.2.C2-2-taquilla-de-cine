export default class mCine {
    acumIngresos = 0;
    contBoletos = 0;
    constructor() {
        this.acumIngresos = 0;
        this.contBoletos = 0;
    }
    procesarBoleto(boleto) {
        this.acumIngresos += boleto.calcularPrecio();
        this.contBoletos++;
    }
    ingresoTotal() {
        return this.acumIngresos;
    }
    promPrecio() {
        if (this.contBoletos === 0)
            return 0;
        return this.acumIngresos / this.contBoletos;
    }
}
//# sourceMappingURL=mCine.js.map