import { Component, OnDestroy, OnInit } from "@angular/core";
import { MenuService } from "./services/menu.service";
import { Subject } from "rxjs";
import { Dish } from "@app/models/dish.model";
import { takeUntil } from "rxjs/operators";


@Component({
  selector: "menu-page",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit, OnDestroy {
  private destroy = new Subject();
  catalog: Dish[] = [];

  constructor(private dataService: MenuService) {}

  ngOnInit() {
    this.dataService.menu$.pipe(takeUntil(this.destroy))
      .subscribe((catalog) => {
        this.catalog = catalog;
      });
  }

  ngOnDestroy() {
    this.destroy.next(true);
  }
}
