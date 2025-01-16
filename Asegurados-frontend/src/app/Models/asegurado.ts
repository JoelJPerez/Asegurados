export interface Asegurado {
    numeroIdentificacion: number;
    primerNombre: string;
    segundoNombre?: string;
    primerApellido: string;
    segundoApellido: string;
    telefonoContacto: string;
    email: string;
    fechaNacimiento: Date;
    valorEstimadoSeguro: number;
    observaciones?: string;
    editing?: boolean;
}