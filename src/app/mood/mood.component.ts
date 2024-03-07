import { Component, Input } from '@angular/core';
import { Mood } from '../mood';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mood',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: ` <section class="listing">
    <img class="mood-photo" [src]="mood.photo" [alt]="mood.name" />
    <h2 class="mood-heading">{{ mood.name }}</h2>
    <p class="text-mood">{{ mood.description }}</p>
    <a [routerLink]="['/mood', mood.name]">Learn More</a>
  </section>`,
  styleUrl: './mood.component.css',
})
export class MoodComponent {
  @Input() mood!: Mood;
}
