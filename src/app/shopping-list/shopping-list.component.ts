import { Component, OnInit } from '@angular/core';
import { Ingreditent } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingreditent[] = [
    new Ingreditent('Apples', 5),
    new Ingreditent('Tomatoes', 6),
    new Ingreditent('Potatoes', 7),
    new Ingreditent('Orgrange', 8),
  ];

  constructor() {}

  ngOnInit() {}

  onIngredientAdded(ingredient: Ingreditent) {
    this.ingredients.push(ingredient);
  }
}
