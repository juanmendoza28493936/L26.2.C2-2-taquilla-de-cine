import mBoleto from "./mBoleto.js";

export default class mBoleto2D extends mBoleto {
    private _esMatine: number = 2;

    constructor({ codigo, precioBase, esMatine }: { codigo: string; precioBase: number; esMatine: number }) {
        super({ codigo, precioBase });
        this.esMatine = esMatine;
    }

    set esMatine(valor: number) {
        this._esMatine = +valor;
    }

    get esMatine(): number {
        return this._esMatine;
    }

    override calcularPrecio(): number {
        if (this.esMatine === 1) {
            return super.calcularPrecio() * 0.9;
        }
        return super.calcularPrecio();
    }
}
