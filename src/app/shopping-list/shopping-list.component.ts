import { Component } from "@angular/core";
import { Ingredient } from "../shared/models/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.scss"],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient("Potato", 3),
    new Ingredient("Onion", 2),
    new Ingredient("Sausages", 4),
  ];
}
