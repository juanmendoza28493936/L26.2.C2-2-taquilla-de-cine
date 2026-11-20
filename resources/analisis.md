# Ejercicio 2. Taquilla de Cine

En el módulo de ventas de un cine (clase mayor: `mCine`) se registran los boletos vendidos (clase menor base: `mBoleto`), conociendo el código de la función y el precio base de la entrada. El cine ofrece dos formatos especializados: Sala Tradicional 2D (`mBoleto2D`, que aplica un 10% de descuento si es función matiné; de lo contrario cobra el precio base) y Sala 3D (`mBoleto3D`, que suma un recargo fijo de $3 por alquiler de lentes).

Se desea determinar el precio final de cada boleto, el ingreso total de la taquilla y el precio promedio por boleto vendido.

Al procesar los datos suministrados (F01: base $10, 2D, Matiné Sí; F02: base $10, 3D; F03: base $10, 2D, Matiné No; F04: base $12, 3D), la salida requerida presenta el siguiente formato:

Boleto F01: $9
Boleto F02: $13
Boleto F03: $10
Boleto F04: $15
Ingreso total de taquilla: $47
Precio promedio por boleto: $11.75

---

## Paso 1: Tabulación de datos

código, precio base, tipo de sala, matiné

F01, 10$, 2D, Sí
F02, 10$, 3D
F03, 10$, 2D, No
F04, 12$, 3D

---

## Paso 2: Identificación de requerimientos

R.1. Precio final de cada boleto vendido (individual)
R.2. Ingreso total de la taquilla
R.3. Precio promedio por boleto vendido

---

## Paso 3: Visualización de la salida

R.1.
- Boleto F01: $9 
- Boleto F02: $13 
- Boleto F03: $10 
- Boleto F04: $15

R.2. Ingreso total de taquilla: $47 (proceso de acumulador general)
R.3. Precio promedio por boleto: $11.75 (proceso de promedio)

---

## Paso 4: Diseño de Clases 

### <<Superclase / Clase Menor Padre>> mBoleto
# _codigo: string
# _precioBase: number
+ constructor({ codigo, precioBase }: { codigo: string; precioBase: number })
+ set codigo(c: string): void
+ get codigo(): string
+ set precioBase(pB: number): void
+ get precioBase(): number
+ calcularPrecio(): number

### <<Subclase / Clase Menor Hija>> mBoleto2D extends mBoleto
- _esMatine: number
+ constructor({ codigo, precioBase, esMatine }: { codigo: string; precioBase: number; esMatine: number })
+ set esMatine(eM: number): void
+ get esMatine(): number
+ override calcularPrecio(): number

### <<Subclase / Clase Menor Hija>> mBoleto3D extends mBoleto
+ constructor({ codigo, precioBase }: { codigo: string; precioBase: number })
+ override calcularPrecio(): number

### <<Clase Mayor>> mCine
- acumIngresos: number
- contBoletos: number
+ constructor()
+ procesarBoleto(boleto: mBoleto): void
+ ingresoTotal(): number
+ promPrecio(): number

---

## Paso 5: Lógica

### En Superclase `mBoleto`
```typescript
calcularPrecio(): number {
    return this.precioBase;
}
```

### En Subclase `mBoleto2D`
```typescript
override calcularPrecio(): number {
    if (this.esMatine === 1) {
        return super.calcularPrecio() * 0.90;
    } else {
        return super.calcularPrecio();
    }
}
```

### En Subclase `mBoleto3D`
```typescript
override calcularPrecio(): number {
    return super.calcularPrecio() + 3;
}
```

### En Clase Mayor `mCine`
```typescript
procesarBoleto(boleto: mBoleto): void {
    this.acumIngresos += boleto.calcularPrecio();
    this.contBoletos++;
}

ingresoTotal(): number {
    return this.acumIngresos;
}

promPrecio(): number {
    if (this.contBoletos > 0) {
        return this.acumIngresos / this.contBoletos;
    } else {
        return 0;
    }
}
```

---

## Ficha de Análisis S-A-M

- **Problema:** Taquilla de Cine

- **Entidad Mayor:** Cine
  Archivos: `mCine.ts`, `vCinePlain.ts`, `cCine.ts`, `iCine.ts`

- **Superclase Menor (Base):** Boleto
  Archivo: `mBoleto.ts`

- **Entidades Menores Especializadas (Subclases):**
  - **Boleto 2D:** `mBoleto2D.ts`, `vBoleto2DPlain.ts`, `cBoleto2D.ts`, `iBoleto2D.ts`
  - **Boleto 3D:** `mBoleto3D.ts`, `vBoleto3DPlain.ts`, `cBoleto3D.ts`, `iBoleto3D.ts`

- **Salidas Individuales (Por cada boleto procesado):**
  - Salida Individual 1, Código del boleto -> `boleto.codigo: string`
  - Salida Individual 2, Precio final del boleto -> `boleto.calcularPrecio(): number`

- **Salidas Gerenciales (Reportadas por la Mayor):**
  - Salida 1, Ingreso total de taquilla -> `ingresoTotal(): number`
  - Salida 2, Precio promedio por boleto -> `promPrecio(): number`

- **Entradas de Captura (Campos de los Formularios Menores):**
  - *Formulario Boleto 2D:*
    - Input 1, `codigo`: string
    - Input 2, `precioBase`: number
    - Input 3, `esMatine`: number (1 = Sí, 2 = No)
  - *Formulario Boleto 3D:*
    - Input 1, `codigo`: string
    - Input 2, `precioBase`: number

- **Acciones de Usuario en la Vista:**
  - En Vista Mayor (`index-plain.html` / `vCinePlain.ts`): Botón `body_btNuevoBoleto2D`, Botón `body_btNuevoBoleto3D`
  - En Vista Menor 2D (`vBoleto2DPlain.ts`): Botón `boleto2D_btAceptar`, Botón `boleto2D_btCancelar`
  - En Vista Menor 3D (`vBoleto3DPlain.ts`): Botón `boleto3D_btAceptar`, Botón `boleto3D_btCancelar`