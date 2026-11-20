export interface iCine {
    onNuevoBoleto2D(callback: () => void): void;
    onNuevoBoleto3D(callback: () => void): void;

    reportarBoleto({ codigo, precioFinal }: { codigo: string; precioFinal: number }): void;
    reportar({ ingresoTotal, promPrecio }: { ingresoTotal: number; promPrecio: number }): void;
}
