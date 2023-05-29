import { Component, EventEmitter, Output } from "@angular/core";
import { HeaderSelection } from "../types/header-selection-enum";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  collapsed: boolean = true;
  headerSelection: HeaderSelection = HeaderSelection.RECIPES;

  @Output() recipesSelected = new EventEmitter<HeaderSelection>();
  @Output() shoppingListSelected = new EventEmitter<HeaderSelection>();
  
  onRecipesSelect() {
    this.recipesSelected.emit(HeaderSelection.RECIPES);
  }
  onShoppingListSelect() {
    this.shoppingListSelected.emit(HeaderSelection.SHOPPING_LIST);
  }
}
