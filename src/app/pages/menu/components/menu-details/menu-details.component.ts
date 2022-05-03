import { Component, Input } from "@angular/core";
import { Dish } from "@app/models/dish.model";

@Component({
  selector: "menu-details",
  templateUrl: "./menu-details.component.html",
  styleUrls: ["./menu-details.component.scss"]
})
export class MenuDetailsComponent {
  @Input() dish?: Dish;
}
