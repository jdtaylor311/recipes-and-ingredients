import {
  Component,
  EventEmitter,
  Output,
} from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"],
})
export class RecipeListComponent {
  @Output() informRecipeDetailsRecipeSelected =
    new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      "Bangers n Mash",
      "Bangers and mash is a dish of sausages (“bangers”), mashed potatoes and onion gravy popular in Britain and Ireland",
      "https://upload.wikimedia.org/wikipedia/commons/9/9c/Sausage_and_mash_with_peas.jpg"
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.informRecipeDetailsRecipeSelected.emit(recipe);
  }
}
