import mBoleto3D from "../models/mBoleto3D.js";
export default class cBoleto3D {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onAceptar(() => this.btAceptarOnClick());
        this.vista.onCancelar(() => this.btCancelarOnClick());
    }
    solicitarBoleto3D(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btAceptarOnClick() {
        const boleto = new mBoleto3D({
            codigo: this.vista.codigo,
            precioBase: this.vista.precioBase,
        });
        this.vista.ocultar();
        this.callback(boleto);
    }
    btCancelarOnClick() {
        this.vista.ocultar();
        this.callback(null);
    }
}
//# sourceMappingURL=cBoleto3D.js.map