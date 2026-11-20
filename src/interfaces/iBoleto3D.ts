export interface iBoleto3D {
    get codigo(): string;
    get precioBase(): number;

    mostrar(): void;
    ocultar(): void;

    onAceptar(callback: () => void): void;
    onCancelar(callback: () => void): void;
}
