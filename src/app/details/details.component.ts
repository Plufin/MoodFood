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
        <img class="headerImage" src="assets/flowerRight.png" alt="header" />
        <div class="circle">
          <div class="banner">
            <h1 class="bannerText">Feeling {{ mood?.name }}?</h1>
          </div>
          <p>{{ mood?.description }}</p>
        </div>
        <img class="headerImage" src="assets/flowerLeft.png" alt="header" />
      </header>
      <div class="foodList">
        <section class="listing">
          <app-food-items
            *ngFor="let foodItem of foodItem"
            [foodItem]="foodItem"
          ></app-food-items>
        </section>
      </div>
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
