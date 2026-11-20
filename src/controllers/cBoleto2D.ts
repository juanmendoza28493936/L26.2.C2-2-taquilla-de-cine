import { iBoleto2D } from "../interfaces/iBoleto2D.js";
import mBoleto2D from "../models/mBoleto2D.js";

export default class cBoleto2D {
    private vista: iBoleto2D;
    private callback!: (boleto: mBoleto2D | null) => void;

    constructor(vista: iBoleto2D) {
        this.vista = vista;
        this.vista.onAceptar(() => this.btAceptarOnClick());
        this.vista.onCancelar(() => this.btCancelarOnClick());
    }

    solicitarBoleto2D(callback: (boleto: mBoleto2D | null) => void): void {
        this.callback = callback;
        this.vista.mostrar();
    }

    private btAceptarOnClick(): void {
        const boleto = new mBoleto2D({
            codigo: this.vista.codigo,
            precioBase: this.vista.precioBase,
            esMatine: this.vista.esMatine,
        });
        this.vista.ocultar();
        this.callback(boleto);
    }

    private btCancelarOnClick(): void {
        this.vista.ocultar();
        this.callback(null);
    }
}
