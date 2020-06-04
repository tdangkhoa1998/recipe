import { Component, OnInit } from '@angular/core';
import { Ingreditent } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: [],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingreditent[];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.refreshIngredientList();
  }

  refreshIngredientList() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingreditent[]) => {
        this.ingredients = ingredients;
      }
    );
  }
}
