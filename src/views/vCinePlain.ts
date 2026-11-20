import { iCine } from "../interfaces/iCine.js";

export default class vCinePlain implements iCine {
    private btNuevoBoleto2D: HTMLButtonElement;
    private btNuevoBoleto3D: HTMLButtonElement;
    private lblIngresoTotal: HTMLElement;
    private lblPromPrecio: HTMLElement;
    private listadoBoletos: HTMLElement;

    constructor() {
        this.btNuevoBoleto2D = document.getElementById("body_btNuevoBoleto2D") as HTMLButtonElement;
        this.btNuevoBoleto3D = document.getElementById("body_btNuevoBoleto3D") as HTMLButtonElement;
        this.lblIngresoTotal = document.getElementById("body_lblIngresoTotal") as HTMLElement;
        this.lblPromPrecio = document.getElementById("body_lblPromPrecio") as HTMLElement;
        this.listadoBoletos = document.getElementById("body_listadoBoletos") as HTMLElement;
    }

    onNuevoBoleto2D(callback: () => void): void {
        this.btNuevoBoleto2D.onclick = callback;
    }

    onNuevoBoleto3D(callback: () => void): void {
        this.btNuevoBoleto3D.onclick = callback;
    }

    reportarBoleto({ codigo, precioFinal }: { codigo: string; precioFinal: number }): void {
        const detalle = document.createElement("li");
        detalle.textContent = `Boleto ${codigo}: $${precioFinal}`;
        this.listadoBoletos.appendChild(detalle);
    }

    reportar({ ingresoTotal, promPrecio }: { ingresoTotal: number; promPrecio: number }): void {
        this.lblIngresoTotal.textContent = `${ingresoTotal}`;
        this.lblPromPrecio.textContent = `${promPrecio}`;
    }
}
