export interface IFood {
  name: string;
  description: string;
  imgsrc: string;
  status?: boolean;
}
export interface IFoods {
  content :  ITypefood[]
}

export interface ITypefood {
    title: string,
    foods: IFood[]
}