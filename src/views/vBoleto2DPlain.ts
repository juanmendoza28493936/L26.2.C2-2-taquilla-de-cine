import { iBoleto2D } from "../interfaces/iBoleto2D.js";

export default class vBoleto2DPlain implements iBoleto2D {
    private vista: HTMLElement;
    private inCodigo: HTMLInputElement;
    private inPrecioBase: HTMLInputElement;
    private inEsMatine: HTMLInputElement;
    private btAceptar: HTMLButtonElement;
    private btCancelar: HTMLButtonElement;

    constructor() {
        this.vista = document.getElementById("boleto2D") as HTMLElement;
        this.inCodigo = document.getElementById("boleto2D_inCodigo") as HTMLInputElement;
        this.inPrecioBase = document.getElementById("boleto2D_inPrecioBase") as HTMLInputElement;
        this.inEsMatine = document.getElementById("boleto2D_inEsMatine") as HTMLInputElement;
        this.btAceptar = document.getElementById("boleto2D_btAceptar") as HTMLButtonElement;
        this.btCancelar = document.getElementById("boleto2D_btCancelar") as HTMLButtonElement;
    }

    get codigo(): string {
        return this.inCodigo.value.trim();
    }

    get precioBase(): number {
        return +this.inPrecioBase.value;
    }

    get esMatine(): number {
        return +this.inEsMatine.value;
    }

    mostrar(): void {
        this.inCodigo.value = "";
        this.inPrecioBase.value = "";
        this.inEsMatine.value = "2";
        this.vista.hidden = false;
    }

    ocultar(): void {
        this.vista.hidden = true;
    }

    onAceptar(callback: () => void): void {
        this.btAceptar.onclick = callback;
    }

    onCancelar(callback: () => void): void {
        this.btCancelar.onclick = callback;
    }
}
