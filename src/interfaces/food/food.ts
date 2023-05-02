export interface IFood {
  name: string;
  description: string;
  imgsrc: string;
}

export interface IFoods {
    content :  ITypefood[]
}

export interface ITypefood {
    title: string,
    foods: IFood[]
}

