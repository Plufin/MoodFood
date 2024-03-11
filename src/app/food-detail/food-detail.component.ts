import { FoodItem } from './../food-items';
import { FoodListService } from './../food-list.service';
import { Component, Input, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FoodItemsComponent } from '../food-items/food-items.component';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-food-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FoodItemsComponent, MatIconModule],
  template: `
    <main>
      <div class="back-button-area">
        <a (click)="goBack()">
          <div class="back-button">
            <mat-icon>chevron_left</mat-icon>
          </div>
        </a>
      </div>
      <img
        class="food-photo"
        [src]="foodItem?.photo"
        alt="Exterior photo of {{ foodItem?.name }}"
      />
      <article>
        <div class="description">
          <h1 class="food-heading">{{ foodItem?.name }}</h1>
          <p class="food-description">{{ foodItem?.description }}</p>
        </div>
      </article>
    </main>
  `,
  styleUrl: './food-detail.component.css',
})
export class FoodDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  FoodListService = inject(FoodListService);
  location: Location = inject(Location);
  foodItem: FoodItem | undefined;

  constructor() {
    const moodFood = String(this.route.snapshot.paramMap.get('name'));

    const foodItem = moodFood;
    this.foodItem = this.FoodListService.getFoodItem(foodItem);
  }
  goBack() {
    this.location.back();
  }
}
