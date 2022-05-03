import { Component } from "@angular/core";
import { Dish } from "@app/models/dish.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MenuService } from "@pages/menu/services/menu.service";


@Component({
  selector: "add-dish-form",
  templateUrl: "./add-dish-form.component.html",
  styleUrls: ["./add-dish-form.component.scss"],
})
export class AddDishFormComponent {
  constructor(private menuService: MenuService) {}

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('', [Validators.required, Validators.minLength(2)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
  });

  addNewDish() {
    this.menuService.addDish(
        new Dish(this.menuService.menu.length, this.form.value.name, this.form.value.description, this.form.value.price),
    );
  }
}
