import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FoodListService } from './../food-list.service';
import { FoodItem } from './../food-items';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img
        class="food-photo"
        [src]="foodItem?.photo"
        alt="Exterior photo of {{ foodItem?.name }}"
      />
      <section class="food-description">
        <h2 class="food-heading">{{ foodItem?.name }}</h2>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{ foodItem?.mood }}</li>
          <li>Does this location have wifi: {{ foodItem?.description }}</li>
        </ul>
      </section>
    </article>
  `,
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  foodListService = inject(FoodListService);
  foodItem: FoodItem | undefined;

  constructor() {
    const foodItemName = String(this.route.snapshot.paramMap.get('name'));
    this.foodItem = this.foodListService.getFoodItem(foodItemName);
  }
}
