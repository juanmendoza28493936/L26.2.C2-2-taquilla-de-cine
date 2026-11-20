export interface iBoleto2D {
    get codigo(): string;
    get precioBase(): number;
    get esMatine(): number;

    mostrar(): void;
    ocultar(): void;

    onAceptar(callback: () => void): void;
    onCancelar(callback: () => void): void;
}
