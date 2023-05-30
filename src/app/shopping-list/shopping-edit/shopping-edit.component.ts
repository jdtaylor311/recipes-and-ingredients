import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from "@angular/core";

import { Ingredient } from "src/app/shared/models/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.scss"],
})
export class ShoppingEditComponent {
  @ViewChild("nameInput", { static: false })
  nameInput: ElementRef;

  @ViewChild("amountInput", { static: false })
  amountInput: ElementRef;

  @Output() addToShoppingList =
    new EventEmitter<Ingredient>();

  onAddToShoppingList() {
    const ingredient = new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value
    );
    this.addToShoppingList.emit(ingredient);
  }
}
