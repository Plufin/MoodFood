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
    <main>
      <img
        class="food-photo"
        [src]="foodItem?.photo"
        alt="Exterior photo of {{ foodItem?.name }}"
      />
      <div class="back-button">
        <p>Back</p>
      </div>
      <article>
        <div class="description">
          <h1 class="food-heading">{{ foodItem?.name }}</h1>
          <p class="food-description">{{ foodItem?.description }}</p>
        </div>
        <div class="nutrition">
          <div class="nutrition-facts">
            <h2>Nutrition Facts:</h2>
            <p>Calories:</p>
            <p>Protein:</p>
            <p>Fat:</p>
            <p>Carbs:</p>
            <p>Fiber:</p>
          </div>
          <div class="note">
            <h2>Note:</h2>
            <p>
              Plese note that these are suggestions, and may not be suitable for
              everyone.
            </p>
          </div>
        </div>
      </article>
    </main>
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
