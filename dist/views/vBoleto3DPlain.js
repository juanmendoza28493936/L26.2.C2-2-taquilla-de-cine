export default class vBoleto3DPlain {
    vista;
    inCodigo;
    inPrecioBase;
    btAceptar;
    btCancelar;
    constructor() {
        this.vista = document.getElementById("boleto3D");
        this.inCodigo = document.getElementById("boleto3D_inCodigo");
        this.inPrecioBase = document.getElementById("boleto3D_inPrecioBase");
        this.btAceptar = document.getElementById("boleto3D_btAceptar");
        this.btCancelar = document.getElementById("boleto3D_btCancelar");
    }
    get codigo() {
        return this.inCodigo.value.trim();
    }
    get precioBase() {
        return +this.inPrecioBase.value;
    }
    mostrar() {
        this.inCodigo.value = "";
        this.inPrecioBase.value = "";
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
}
//# sourceMappingURL=vBoleto3DPlain.js.map