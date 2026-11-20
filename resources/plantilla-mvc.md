iMenor.ts

export interface i[NombreMenor] {
    get [atributoTxt](): string;
    get [atributoNum](): number;

    mostrar(): void;
    ocultar(): void;

    onAceptar(callback: () => void): void;
    onCancelar(callback: () => void): void;
}

iMayor.ts

export interface i[NombreMayor] {
    onNuevo[NombreMenor](callback: () => void): void;

    reportar({
        [salida1],
        [salida2],
    }: {
        [salida1]: number;
        [salida2]: number;
    }): void;
}

mMenor.ts

export default class m[NombreMenor] {
    private _[atributoTxt]: string = "";
    private _[atributoNum]: number = 0;

    constructor({
        [atributoTxt],
        [atributoNum],
    }: {
        [atributoTxt]: string;
        [atributoNum]: number;
    }) {
        this.[atributoTxt] = [atributoTxt];
        this.[atributoNum] = [atributoNum];
    }

    set [atributoTxt](valor: string) {
        this._[atributoTxt] = valor.trim();
    }

    get [atributoTxt](): string {
        return this._[atributoTxt];
    }

    set [atributoNum](valor: number) {
        this._[atributoNum] = +valor;
    }

    get [atributoNum](): number {
        return this._[atributoNum];
    }

    [calculoPropio](): number {
        return 0;
    }
}

mMayor.ts

import m[NombreMenor] from "./[NombreMenor].js";

export default class m[NombreMenor] {
    private acum[Concepto]: number = 0;
    private cont[Concepto]: number = 0;

    constructor() {
        this.acum[Concepto] = 0;
        this.cont[Concepto] = 0;
    }

    procesar[NombreMenor]([alias]: m[NombreMenor]): void {
        this.acum[Concepto] += [alias].[atributoNum];
        this.cont[Concepto]++;
    }

    prom[Concepto](): number {
        if (this.cont[Concepto] === 0) return 0;
        return this.acum[Concepto] / this.cont[Concepto];
    }

    porc[Concepto](): number {
        if (this.contTotal === 0) return 0;
        return (this.contParte / this.contTotal) * 100;
    }
}

index-plain.html

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>[Nombre del Problema] - MVC</title>
</head>
<body>

<section id="body">
    <h2>[Título de la Aplicación]</h2>
    <button id="body_btNuevo[NombreMenor]">Nuevo [NombreMenor]</button>
    <hr />
    <div>[Salida 1]: <span id="body_lbl[Salida1]">0</span></div>
    <div>[Salida 2]: <span id="body_lbl[Salida2]">0</span></div>
</section>

<section id="[nombreMenor]" hidden style="margin-top: 20px; border: 1px solid #ccc; padding: 15px; width: 320px;">
    <h5>Procesar [NombreMenor]</h5>
    <div>
        <label>[Etiqueta 1]:
            <input type="text" id="[nombreMenor]_in[AtributoTxt]" placeholder="Ingrese valor" />
        </label>
    </div>
    <div>
        <label>[Etiqueta 2]:
            <input type="number" id="[nombreMenor]_in[AtributoNum]" placeholder="0" />
        </label>
    </div>
    <br />
    <button id="[nombreMenor]_btCancelar">Cancelar</button>
    <button id="[nombreMenor]_btAceptar">Aceptar</button>
</section>

<script type="module">
    import c[NombreMayor] from "./dist/controllers/c[NombreMayor].js";
    import c[NombreMenor] from "./dist/controllers/c[NombreMenor].js";
    import v[NombreMayor]Plain from "./dist/views/v[NombreMayor]Plain.js";
    import v[NombreMenor]Plain from "./dist/views/v[NombreMenor]Plain.js";

    const vistaMayor = new v[NombreMayor]Plain();
    const vistaMenor = new v[NombreMenor]Plain();

    const controladorMenor = new c[NombreMenor](vistaMenor);
    new c[NombreMayor](vistaMayor, controladorMenor);
</script>
</body>
</html>

vMenorPlain.ts

import { i[NombreMenor] } from "../interfaces/i[NombreMenor].js";

export default class v[NombreMenor]Plain implements i[NombreMenor] {
    private vista: HTMLElement;
    private in[AtributoTxt]: HTMLInputElement;
    private in[AtributoNum]: HTMLInputElement;
    private btAceptar: HTMLButtonElement;
    private btCancelar: HTMLButtonElement;

    constructor() {
        this.vista = document.getElementById("[nombreMenor]") as HTMLElement;
        this.in[AtributoTxt] = document.getElementById("[nombreMenor]_in[AtributoTxt]") as HTMLInputElement;
        this.in[AtributoNum] = document.getElementById("[nombreMenor]_in[AtributoNum]") as HTMLInputElement;
        this.btAceptar = document.getElementById("[nombreMenor]_btAceptar") as HTMLButtonElement;
        this.btCancelar = document.getElementById("[nombreMenor]_btCancelar") as HTMLButtonElement;
    }

    get [atributoTxt](): string {
        return this.in[AtributoTxt].value.trim();
    }

    get [atributoNum](): number {
        return +this.in[AtributoNum].value;
    }

    mostrar(): void {
        this.in[AtributoTxt].value = "";
        this.in[AtributoNum].value = "";
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

vMayorPlain.ts

import { i[NombreMayor] } from "../interfaces/i[NombreMayor].js";

export default class v[NombreMayor]Plain implements i[NombreMayor] {
    private btNuevo: HTMLButtonElement;
    private lbl[Salida1]: HTMLElement;
    private lbl[Salida2]: HTMLElement;

    constructor() {
        this.btNuevo = document.getElementById("body_btNuevo[NombreMenor]") as HTMLButtonElement;
        this.lbl[Salida1] = document.getElementById("body_lbl[Salida1]") as HTMLElement;
        this.lbl[Salida2] = document.getElementById("body_lbl[Salida2]") as HTMLElement;
    }

    onNuevo[NombreMenor](callback: () => void): void {
        this.btNuevo.onclick = callback;
    }

    reportar({
        [salida1],
        [salida2],
    }: {
        [salida1]: number;
        [salida2]: number;
    }): void {
        this.lbl[Salida1].innerHTML = `${[salida1]}`;
        this.lbl[Salida2].innerHTML = `${[salida2]}`;
    }
}

cMenor.ts

import { i[NombreMenor] } from "../interfaces/i[NombreMenor].js";
import m[NombreMenor] from "../models/m[NombreMenor].js";

export default class c[NombreMenor] {
    private vista: i[NombreMenor];
    private callback!: ([alias]: m[NombreMenor] | null) => void;

    constructor(vista: i[NombreMenor]) {
        this.vista = vista;
        this.vista.onAceptar(() => this.btAceptarOnClick());
        this.vista.onCancelar(() => this.btCancelarOnClick());
    }

    solicitar[NombreMenor](callback: ([alias]: m[NombreMenor] | null) => void): void {
        this.callback = callback;
        this.vista.mostrar();
    }

    private btAceptarOnClick(): void {
        const instancia = new m[NombreMenor]({
            [atributoTxt]: this.vista.[atributoTxt],
            [atributoNum]: this.vista.[atributoNum],
        });
        this.vista.ocultar();
        this.callback(instancia);
    }

    private btCancelarOnClick(): void {
        this.vista.ocultar();
        this.callback(null);
    }
}

cMayor.ts

import m[NombreMayor] from "../models/m[NombreMayor].js";
import { i[NombreMayor] } from "../interfaces/i[NombreMayor].js";
import c[NombreMenor] from "./c[NombreMenor].js";

export default class c[NombreMayor] {
    private m[NombreMayor]: m[NombreMayor] = new m[NombreMayor]();
    private v[NombreMayor]: i[NombreMayor];
    private c[NombreMenor]: c[NombreMenor];

    constructor(vistaMayor: i[NombreMayor], controladorMenor: c[NombreMenor]) {
        this.v[NombreMayor] = vistaMayor;
        this.c[NombreMenor] = controladorMenor;

        this.v[NombreMayor].onNuevo[NombreMayor](() => this.procesar1[NombreMenor]());
    }

    private procesar1[NombreMenor](): void {
        this.c[NombreMenor].solicitar[NombreMenor](([alias]) => {
            if ([alias] !== null) {
                this.m[NombreMayor].procesar[NombreMenor]([alias]);
                this.v[NombreMayor].reportar({
                    [salida1]: this.m[NombreMayor].prom[Concepto](),
                    [salida2]: this.m[NombreMayor].porc[Concepto](),
                });
            }
        });
    }
}
