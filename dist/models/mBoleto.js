export default class mBoleto {
    _codigo = "";
    _precioBase = 0;
    constructor({ codigo, precioBase }) {
        this.codigo = codigo;
        this.precioBase = precioBase;
    }
    set codigo(valor) {
        this._codigo = valor.trim();
    }
    get codigo() {
        return this._codigo;
    }
    set precioBase(valor) {
        this._precioBase = +valor;
    }
    get precioBase() {
        return this._precioBase;
    }
    calcularPrecio() {
        return this.precioBase;
    }
}
//# sourceMappingURL=mBoleto.js.map