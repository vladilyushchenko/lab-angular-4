import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Dish } from "@app/models/dish.model";
import { DishesMock } from "@app/mocks/dishes.mock";


@Injectable()
export class MenuService {
  private menuData = new BehaviorSubject<Dish[]>([]);

  get menu$(): Observable<Dish[]> {
    return this.menuData.asObservable();
  }

  get menu(): Dish[] {
    return this.menuData.value;
  }

  constructor() {
    this.menuData.next(DishesMock)
  }

  addDish(dish: Dish) {
    this.menuData.next([dish, ...this.menuData.value]);
  }
}
