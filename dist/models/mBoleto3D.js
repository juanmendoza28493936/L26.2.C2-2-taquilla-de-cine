import mBoleto from "./mBoleto.js";
export default class mBoleto3D extends mBoleto {
    constructor({ codigo, precioBase }) {
        super({ codigo, precioBase });
    }
    calcularPrecio() {
        return super.calcularPrecio() + 3;
    }
}
//# sourceMappingURL=mBoleto3D.js.map