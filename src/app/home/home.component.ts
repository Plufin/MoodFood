import { FoodListService } from './../food-list.service';
import { FoodItem } from './../food-items';
import { Component, inject } from '@angular/core';
import { FoodItemsComponent } from '../food-items/food-items.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FoodItemsComponent],
  template: `
    <h1>Find your comfort food</h1>
    <h2>based on the mood</h2>
    <section>
      <button class="primary" type="button">Sad</button>
      <button class="primary" type="button">Stressed</button>
      <button class="primary" type="button">Bored</button>
      <button class="primary" type="button">Tired</button>
      <button class="primary" type="button">Unfocused</button>
    </section>
    <section class="results">
      <app-food-items
        *ngFor="let foodItem of FoodItem"
        [foodItem]="foodItem"
      ></app-food-items>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  FoodItem: FoodItem[] = [];
  FoodListService: FoodListService = inject(FoodListService);

  constructor() {
    this.FoodItem = this.FoodListService.getAllFoodItems();
  }
}
