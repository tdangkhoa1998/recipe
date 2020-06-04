import { Ingreditent } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingreditent[];

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    ingredients: Ingreditent[]
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
