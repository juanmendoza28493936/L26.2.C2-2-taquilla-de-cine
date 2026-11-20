import mCine from "../models/mCine.js";
import mBoleto2D from "../models/mBoleto2D.js";
import mBoleto3D from "../models/mBoleto3D.js";
export default class cCine {
    modelo = new mCine();
    vista;
    controladorBoleto2D;
    controladorBoleto3D;
    constructor(vista, controladorBoleto2D, controladorBoleto3D) {
        this.vista = vista;
        this.controladorBoleto2D = controladorBoleto2D;
        this.controladorBoleto3D = controladorBoleto3D;
        this.vista.onNuevoBoleto2D(() => this.procesarNuevoBoleto2D());
        this.vista.onNuevoBoleto3D(() => this.procesarNuevoBoleto3D());
        this.cargarDatosDePrueba();
        this.reportarResultados();
    }
    cargarDatosDePrueba() {
        this.procesarBoleto(new mBoleto2D({ codigo: "F01", precioBase: 10, esMatine: 1 }));
        this.procesarBoleto(new mBoleto3D({ codigo: "F02", precioBase: 10 }));
        this.procesarBoleto(new mBoleto2D({ codigo: "F03", precioBase: 10, esMatine: 2 }));
        this.procesarBoleto(new mBoleto3D({ codigo: "F04", precioBase: 12 }));
    }
    procesarNuevoBoleto2D() {
        this.controladorBoleto2D.solicitarBoleto2D((boleto) => {
            if (boleto !== null) {
                this.procesarBoleto(boleto);
                this.reportarResultados();
            }
        });
    }
    procesarNuevoBoleto3D() {
        this.controladorBoleto3D.solicitarBoleto3D((boleto) => {
            if (boleto !== null) {
                this.procesarBoleto(boleto);
                this.reportarResultados();
            }
        });
    }
    procesarBoleto(boleto) {
        this.modelo.procesarBoleto(boleto);
        this.vista.reportarBoleto({
            codigo: boleto.codigo,
            precioFinal: boleto.calcularPrecio(),
        });
    }
    reportarResultados() {
        this.vista.reportar({
            ingresoTotal: this.modelo.ingresoTotal(),
            promPrecio: this.modelo.promPrecio(),
        });
    }
}
//# sourceMappingURL=cCine.js.map