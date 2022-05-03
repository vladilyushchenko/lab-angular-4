import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { MenuComponent } from "./menu.component";
import { MenuListComponent } from "./components/menu-list/menu-list.component";
import { MenuDetailsComponent } from "./components/menu-details/menu-details.component";
import { AddDishFormComponent } from "./components/add-dish-form/add-dish-form.component";

import { MenuService } from "./services/menu.service";
import { MenuRoutingModule } from "./menu-routing.module";


@NgModule({
  declarations: [MenuComponent, MenuListComponent, MenuDetailsComponent, AddDishFormComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [MenuService]
})
export class MenuModule {}
