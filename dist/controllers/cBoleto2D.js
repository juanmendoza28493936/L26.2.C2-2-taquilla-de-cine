import mBoleto2D from "../models/mBoleto2D.js";
export default class cBoleto2D {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onAceptar(() => this.btAceptarOnClick());
        this.vista.onCancelar(() => this.btCancelarOnClick());
    }
    solicitarBoleto2D(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btAceptarOnClick() {
        const boleto = new mBoleto2D({
            codigo: this.vista.codigo,
            precioBase: this.vista.precioBase,
            esMatine: this.vista.esMatine,
        });
        this.vista.ocultar();
        this.callback(boleto);
    }
    btCancelarOnClick() {
        this.vista.ocultar();
        this.callback(null);
    }
}
//# sourceMappingURL=cBoleto2D.js.map