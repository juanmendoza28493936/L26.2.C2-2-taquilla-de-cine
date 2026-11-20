export default class mBoleto {
    protected _codigo: string = "";
    protected _precioBase: number = 0;

    constructor({ codigo, precioBase }: { codigo: string; precioBase: number }) {
        this.codigo = codigo;
        this.precioBase = precioBase;
    }

    set codigo(valor: string) {
        this._codigo = valor.trim();
    }

    get codigo(): string {
        return this._codigo;
    }

    set precioBase(valor: number) {
        this._precioBase = +valor;
    }

    get precioBase(): number {
        return this._precioBase;
    }

    calcularPrecio(): number {
        return this.precioBase;
    }
}
