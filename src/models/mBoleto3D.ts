import mBoleto from "./mBoleto.js";

export default class mBoleto3D extends mBoleto {
    constructor({ codigo, precioBase }: { codigo: string; precioBase: number }) {
        super({ codigo, precioBase });
    }

    override calcularPrecio(): number {
        return super.calcularPrecio() + 3;
    }
}
