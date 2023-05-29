import { Component } from "@angular/core";
import { HeaderSelection } from "./types/header-selection-enum";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "recipes-and-ingredients";
  Recipes = HeaderSelection.RECIPES;
  ShoppingList = HeaderSelection.SHOPPING_LIST;
  FeatureEnum = HeaderSelection;
  selectedHeaderItem: HeaderSelection = HeaderSelection.RECIPES;

  onRecipesSelected() {
    this.selectedHeaderItem = HeaderSelection.RECIPES;
  }

  onShoppingListSelected() {
    this.selectedHeaderItem = HeaderSelection.SHOPPING_LIST;
  }
}
