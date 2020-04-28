import { Component } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10),
    new Ingredient("Oranges", 7),
    new Ingredient("Grapes", 12),
    new Ingredient("Bananas", 20),
    new Ingredient("Pears", 23),
    new Ingredient("Cereals", 27),
    new Ingredient("Potatoes", 30),
    new Ingredient("Vegetables", 15),
    new Ingredient("Strawberries", 37)
  ];
}
