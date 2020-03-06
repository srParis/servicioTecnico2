
export interface Direccion {
    id?: number;
    nombre_dir?: string;
    numero?: number;
    piso?: string;
    numeroPiso?: string;
    poblacion?: number;
}
export interface Dispositivo {
    id?: number;
    imei?: string;
    numeroSerie?: string;
    modelo?: number;
    marca?: number;
    usuario?: number;
}

export interface Empresa {
    id?: number;
    nombre?: string;
    direccion?: number;
    cif?: string;

}
export interface Factura {
    id?: number;
    precioT?: number;
}
export interface HistorialEstados {
    id?: number;
    fechaInicio?: Date;
    fechaFin?: Date;
    tipoEstado?: number;
    reparacion?: number;

}
export interface LineaFactura {
    id?: number;
    precio?: number;
    reparacion?: number;
    factura?: number;
}
export interface LineaReparacion {
    id?: number;
    dispositivo?: number;
    reparacion?: number;
    tipoReparacion?: number;
}

export interface Marca {
    id?: number;
    nombre?: string;
}
export interface Modelo {
    id?: number;
    modelo?: string;
}
export interface Poblacion {
    id?: number;
    nombre?: string;
    cp?: number;
    provincia?: number;
}
export interface Provincia {
    id?: number;
    nombre?: number;
}
export interface Puesto {
    id?: number;
    nompuesto?: number;

}
export interface Reparaciones {
    empresa?: number;
    trabajador?: number;
}
export interface TipoEstado {
    id?: number;
    nombre?: string;
}
export interface TipoReparacion {
    id?: number;
    nombre?: string;
    precio?: number;
}
export interface Trabajadores {
    id?: number;
    nombre?: string;
    puesto?: number;
    direccion?: string;
    nif?: string;
    tlf?: number;
    email?: string;
    password?: string;
}
export interface Usuario {
    id?: number;
    nombre?: string;
    email?: string;
    password?: string;
    direccion?: number;
    nif?: string;
    tlf?: number;
    // imagen?: string;
}


