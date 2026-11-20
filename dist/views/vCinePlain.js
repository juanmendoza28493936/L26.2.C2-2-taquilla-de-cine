export default class vCinePlain {
    btNuevoBoleto2D;
    btNuevoBoleto3D;
    lblIngresoTotal;
    lblPromPrecio;
    listadoBoletos;
    constructor() {
        this.btNuevoBoleto2D = document.getElementById("body_btNuevoBoleto2D");
        this.btNuevoBoleto3D = document.getElementById("body_btNuevoBoleto3D");
        this.lblIngresoTotal = document.getElementById("body_lblIngresoTotal");
        this.lblPromPrecio = document.getElementById("body_lblPromPrecio");
        this.listadoBoletos = document.getElementById("body_listadoBoletos");
    }
    onNuevoBoleto2D(callback) {
        this.btNuevoBoleto2D.onclick = callback;
    }
    onNuevoBoleto3D(callback) {
        this.btNuevoBoleto3D.onclick = callback;
    }
    reportarBoleto({ codigo, precioFinal }) {
        const detalle = document.createElement("li");
        detalle.textContent = `Boleto ${codigo}: $${precioFinal}`;
        this.listadoBoletos.appendChild(detalle);
    }
    reportar({ ingresoTotal, promPrecio }) {
        this.lblIngresoTotal.textContent = `${ingresoTotal}`;
        this.lblPromPrecio.textContent = `${promPrecio}`;
    }
}
//# sourceMappingURL=vCinePlain.js.map