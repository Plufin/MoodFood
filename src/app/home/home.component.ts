import { CommonModule } from '@angular/common';
import { FoodListService } from './../food-list.service';
import { FoodItem } from './../food-items';
import { Component, inject } from '@angular/core';
import { FoodItemsComponent } from '../food-items/food-items.component';
import { MoodComponent } from '../mood/mood.component';
import { Mood } from '../mood';
import { MoodService } from '../mood.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FoodItemsComponent, MoodComponent],
  template: `
    <article>
      <header>
        <img class="headerImage" src="assets/flowerLeft2.png" alt="header" />
        <div class="middleHeader">
          <h1 class="title">MoodFood</h1>
          <div class="divider">
            <h1>Find the food</h1>
            <h2>based on your mood</h2>
          </div>
        </div>
        <img class="headerImage" src="assets/flowerRight2.png" alt="header" />
      </header>
      <div class="moodBox">
        <h1>I am feeling...</h1>
        <section class="results">
          <app-mood *ngFor="let mood of Mood" [mood]="mood"></app-mood>
        </section>
      </div>
    </article>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  FoodItem: FoodItem[] = [];
  FoodListService: FoodListService = inject(FoodListService);

  Mood: Mood[] = [];
  MoodService: MoodService = inject(MoodService);

  constructor() {
    this.FoodItem = this.FoodListService.getAllFoodItems();

    this.Mood = this.MoodService.getAllMoods();
  }
}
