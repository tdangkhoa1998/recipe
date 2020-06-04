import { Injectable, EventEmitter } from '@angular/core';
import { Ingreditent } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingreditent[]>();

  private ingredients: Ingreditent[] = [
    new Ingreditent('Apples', 5),
    new Ingreditent('Tomatoes', 6),
    new Ingreditent('Potatoes', 7),
    new Ingreditent('Orgrange', 8),
  ];

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingreditent) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingreditent[]) {
    this.ingredients.push(...ingredients);
    // it means for (let ingredient of ingredients){
    //   this.addIngredient(ingredient);
    // }
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
