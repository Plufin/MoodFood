import { FoodItem } from './../food-items';
import { FoodListService } from './../food-list.service';
import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FoodItemsComponent } from '../food-items/food-items.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FoodItemsComponent],
  template: `
    <section class="listing">
      <img
        class="food-photo"
        [src]="foodItem?.photo"
        alt="Exterior photo of {{ foodItem?.name }}"
      />
      <h2 class="food-heading">{{ foodItem?.name }}</h2>
    </section>
  `,
  styleUrl: './food-detail.component.css',
})
export class FoodDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  FoodListService = inject(FoodListService);
  foodItem: FoodItem | undefined;

  constructor() {
    const moodFood = String(this.route.snapshot.paramMap.get('name'));

    const foodItem = moodFood;
    this.foodItem = this.FoodListService.getFoodItem(foodItem);
  }
}
