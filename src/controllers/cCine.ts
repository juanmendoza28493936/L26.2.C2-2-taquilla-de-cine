import mCine from "../models/mCine.js";
import mBoleto from "../models/mBoleto.js";
import mBoleto2D from "../models/mBoleto2D.js";
import mBoleto3D from "../models/mBoleto3D.js";
import { iCine } from "../interfaces/iCine.js";
import cBoleto2D from "./cBoleto2D.js";
import cBoleto3D from "./cBoleto3D.js";

export default class cCine {
    private modelo: mCine = new mCine();
    private vista: iCine;
    private controladorBoleto2D: cBoleto2D;
    private controladorBoleto3D: cBoleto3D;

    constructor(vista: iCine, controladorBoleto2D: cBoleto2D, controladorBoleto3D: cBoleto3D) {
        this.vista = vista;
        this.controladorBoleto2D = controladorBoleto2D;
        this.controladorBoleto3D = controladorBoleto3D;

        this.vista.onNuevoBoleto2D(() => this.procesarNuevoBoleto2D());
        this.vista.onNuevoBoleto3D(() => this.procesarNuevoBoleto3D());

        this.cargarDatosDePrueba();
        this.reportarResultados();
    }

    private cargarDatosDePrueba(): void {
        this.procesarBoleto(new mBoleto2D({ codigo: "F01", precioBase: 10, esMatine: 1 }));
        this.procesarBoleto(new mBoleto3D({ codigo: "F02", precioBase: 10 }));
        this.procesarBoleto(new mBoleto2D({ codigo: "F03", precioBase: 10, esMatine: 2 }));
        this.procesarBoleto(new mBoleto3D({ codigo: "F04", precioBase: 12 }));
    }

    private procesarNuevoBoleto2D(): void {
        this.controladorBoleto2D.solicitarBoleto2D((boleto) => {
            if (boleto !== null) {
                this.procesarBoleto(boleto);
                this.reportarResultados();
            }
        });
    }

    private procesarNuevoBoleto3D(): void {
        this.controladorBoleto3D.solicitarBoleto3D((boleto) => {
            if (boleto !== null) {
                this.procesarBoleto(boleto);
                this.reportarResultados();
            }
        });
    }

    private procesarBoleto(boleto: mBoleto): void {
        this.modelo.procesarBoleto(boleto);
        this.vista.reportarBoleto({
            codigo: boleto.codigo,
            precioFinal: boleto.calcularPrecio(),
        });
    }

    private reportarResultados(): void {
        this.vista.reportar({
            ingresoTotal: this.modelo.ingresoTotal(),
            promPrecio: this.modelo.promPrecio(),
        });
    }
}
