import mBoleto from "./mBoleto.js";

export default class mCine {
    private acumIngresos: number = 0;
    private contBoletos: number = 0;

    constructor() {
        this.acumIngresos = 0;
        this.contBoletos = 0;
    }

    procesarBoleto(boleto: mBoleto): void {
        this.acumIngresos += boleto.calcularPrecio();
        this.contBoletos++;
    }

    ingresoTotal(): number {
        return this.acumIngresos;
    }

    promPrecio(): number {
        if (this.contBoletos === 0) return 0;
        return this.acumIngresos / this.contBoletos;
    }
}
