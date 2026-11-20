import { iBoleto3D } from "../interfaces/iBoleto3D.js";

export default class vBoleto3DPlain implements iBoleto3D {
    private vista: HTMLElement;
    private inCodigo: HTMLInputElement;
    private inPrecioBase: HTMLInputElement;
    private btAceptar: HTMLButtonElement;
    private btCancelar: HTMLButtonElement;

    constructor() {
        this.vista = document.getElementById("boleto3D") as HTMLElement;
        this.inCodigo = document.getElementById("boleto3D_inCodigo") as HTMLInputElement;
        this.inPrecioBase = document.getElementById("boleto3D_inPrecioBase") as HTMLInputElement;
        this.btAceptar = document.getElementById("boleto3D_btAceptar") as HTMLButtonElement;
        this.btCancelar = document.getElementById("boleto3D_btCancelar") as HTMLButtonElement;
    }

    get codigo(): string {
        return this.inCodigo.value.trim();
    }

    get precioBase(): number {
        return +this.inPrecioBase.value;
    }

    mostrar(): void {
        this.inCodigo.value = "";
        this.inPrecioBase.value = "";
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
