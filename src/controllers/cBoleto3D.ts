import { iBoleto3D } from "../interfaces/iBoleto3D.js";
import mBoleto3D from "../models/mBoleto3D.js";

export default class cBoleto3D {
    private vista: iBoleto3D;
    private callback!: (boleto: mBoleto3D | null) => void;

    constructor(vista: iBoleto3D) {
        this.vista = vista;
        this.vista.onAceptar(() => this.btAceptarOnClick());
        this.vista.onCancelar(() => this.btCancelarOnClick());
    }

    solicitarBoleto3D(callback: (boleto: mBoleto3D | null) => void): void {
        this.callback = callback;
        this.vista.mostrar();
    }

    private btAceptarOnClick(): void {
        const boleto = new mBoleto3D({
            codigo: this.vista.codigo,
            precioBase: this.vista.precioBase,
        });
        this.vista.ocultar();
        this.callback(boleto);
    }

    private btCancelarOnClick(): void {
        this.vista.ocultar();
        this.callback(null);
    }
}
