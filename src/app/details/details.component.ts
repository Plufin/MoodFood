import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MoodService } from './../mood.service';
import { Mood } from './../mood';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img
        class="mood-photo"
        [src]="mood?.photo"
        alt="Exterior photo of {{ mood?.name }}"
      />
      <section class="food-description">
        <h2 class="food-heading">{{ mood?.name }}</h2>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{ mood?.name }}</li>
          <li>Does this location have wifi: {{ mood?.description }}</li>
        </ul>
      </section>
    </article>
  `,
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  MoodService = inject(MoodService);
  mood: Mood | undefined;

  constructor() {
    const moodName = String(this.route.snapshot.paramMap.get('name'));
    this.mood = this.MoodService.getMood(moodName);
  }
}
