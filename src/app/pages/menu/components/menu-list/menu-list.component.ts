import { Component, Input } from "@angular/core";
import { Dish } from "@app/models/dish.model";


@Component({
  selector: 'menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent {
  @Input() menu: Dish[] = [];
  activeItem = -1;

  onItemClick(index: number) {
    this.activeItem = this.activeItem == index ? -1: index;
  }
}
