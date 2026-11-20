export default class vBoleto2DPlain {
    vista;
    inCodigo;
    inPrecioBase;
    inEsMatine;
    btAceptar;
    btCancelar;
    constructor() {
        this.vista = document.getElementById("boleto2D");
        this.inCodigo = document.getElementById("boleto2D_inCodigo");
        this.inPrecioBase = document.getElementById("boleto2D_inPrecioBase");
        this.inEsMatine = document.getElementById("boleto2D_inEsMatine");
        this.btAceptar = document.getElementById("boleto2D_btAceptar");
        this.btCancelar = document.getElementById("boleto2D_btCancelar");
    }
    get codigo() {
        return this.inCodigo.value.trim();
    }
    get precioBase() {
        return +this.inPrecioBase.value;
    }
    get esMatine() {
        return +this.inEsMatine.value;
    }
    mostrar() {
        this.inCodigo.value = "";
        this.inPrecioBase.value = "";
        this.inEsMatine.value = "2";
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
//# sourceMappingURL=vBoleto2DPlain.js.map