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
    <h1>Find your comfort food</h1>
    <h2>based on the mood</h2>
    <section class="results">
      <app-mood *ngFor="let mood of Mood" [mood]="mood"></app-mood>
    </section>
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
