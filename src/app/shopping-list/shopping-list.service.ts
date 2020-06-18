import { Subject } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingreditent } from '../shared/ingredient.model';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingreditent[]>();
  startEditing = new Subject<number>();

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

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingreditent) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingreditent[]) {
    this.ingredients.push(...ingredients);
    // it means for (let ingredient of ingredients){
    //   this.addIngredient(ingredient);
    // }
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngreditent(index: number, newIngredient: Ingreditent) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
