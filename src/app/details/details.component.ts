import { FoodListService } from './../food-list.service';
import { FoodItem } from './../food-items';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MoodService } from './../mood.service';
import { Mood } from './../mood';
import { FoodItemsComponent } from '../food-items/food-items.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, FoodItemsComponent],
  template: `
    <article>
      <header>
        <h1 class="page-heading">Feeling {{ mood?.name }}?</h1>
      </header>
      <section class="listing-features">
        <ul>
          <li>{{ mood?.name }}</li>
          <li>{{ mood?.description }}</li>
        </ul>
      </section>
      <h2>Comfort Food</h2>
      <section class="listing">
        <app-food-items
          *ngFor="let foodItem of foodItem"
          [foodItem]="foodItem"
        ></app-food-items>
      </section>
    </article>
  `,
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  MoodService = inject(MoodService);
  mood: Mood | undefined;

  foodItem: FoodItem[] = [];
  FoodListService: FoodListService = inject(FoodListService);

  constructor() {
    const moodName = String(this.route.snapshot.paramMap.get('name'));
    this.mood = this.MoodService.getMood(moodName);

    const moodFood = moodName.toLowerCase();
    this.foodItem = this.FoodListService.getMoodFoodItems(moodFood);
  }
}
