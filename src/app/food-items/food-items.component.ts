import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodItem } from '../food-items';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-food-items',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <a [routerLink]="['/item', foodItem.name]"
      ><section class="listing">
        <img
          class="food-photo"
          [src]="foodItem.photo"
          alt="Exterior photo of {{ foodItem.name }}"
        />
        <h2 class="food-heading">{{ foodItem.name }}</h2>
      </section>
    </a>
  `,
  styleUrl: './food-items.component.css',
})
export class FoodItemsComponent {
  @Input() foodItem!: FoodItem;
}
