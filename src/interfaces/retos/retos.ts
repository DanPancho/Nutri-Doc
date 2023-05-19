export interface IReto{
    title: string;
    description: string;
}

export interface IRetos {
    retos: IReto[]
}

export interface IDia {
    diaNum: string;
    alimentacion: IAlimentacion[],
    colacion: string[]
}

export interface IAlimentacion {
    nombrePlato: string,
    ingredientes: string[]
}
