export interface IReto {
  title: string;
  description: string;
}

export interface IRetos {
  retos: IReto[];
}

export interface IDia {
  diaNum: string;
  alimentacion: IAlimentacion[];
  colacion: string[];
}

export interface IAlimentacion {
  nombrePlato: string;
  ingredientes: string[];
}

export interface IIngredientes {
  nombrePlato: string;
  preparacion: string;
  alimentos: string[];
}
export interface IPlatos {
  description: string;
  name: string;
  img:string;
  ingredientesPlatos: IIngredientes[];
}
export interface IDiaReto {
  platos: IPlatos[];
  statusDay: number;
}

export interface IDiasReto {
  idReto: string;
  dias: IDiaReto[];
  retoStatus: number;
  actualDay: string;
  dayStart: string;
}
