import mBoleto from "./mBoleto.js";
export default class mBoleto2D extends mBoleto {
    _esMatine = 2;
    constructor({ codigo, precioBase, esMatine }) {
        super({ codigo, precioBase });
        this.esMatine = esMatine;
    }
    set esMatine(valor) {
        this._esMatine = +valor;
    }
    get esMatine() {
        return this._esMatine;
    }
    calcularPrecio() {
        if (this.esMatine === 1) {
            return super.calcularPrecio() * 0.9;
        }
        return super.calcularPrecio();
    }
}
//# sourceMappingURL=mBoleto2D.js.map