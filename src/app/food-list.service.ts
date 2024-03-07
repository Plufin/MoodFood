import { Injectable } from '@angular/core';
import { FoodItem } from './food-items';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  protected foodItem: FoodItem[] = [
    {
      name: 'Chocolate Cake',
      description: 'Rich and moist chocolate cake',
      photo: 'assets/food1.jpg',
      mood: 'sad',
    },

    {
      name: 'Carrot Cake',
      description: 'Moist and delicious carrot cake',
      photo: 'assets/food2.jpg',
      mood: 'stressed',
    },
    {
      name: 'Chocolate Chip Cookies',
      description: 'Soft and chewy chocolate chip cookies',
      photo: 'assets/food3.jpg',
      mood: 'bored',
    },
    {
      name: 'Chocolate Ice Cream',
      description: 'Creamy and delicious chocolate ice cream',
      photo: 'assets/food3.jpg',
      mood: 'tired',
    },
    {
      name: 'Chocolate Milkshake',
      description: 'Thick and creamy chocolate milkshake',
      photo: 'assets/food1.jpg',
      mood: 'unfocused',
    },
    {
      name: 'Chocolate Mousse',
      description: 'Light and airy chocolate mousse',
      photo: 'assets/food2.jpg',
      mood: 'Stressed',
    },
    {
      name: 'Chocolate Pudding',
      description: 'Smooth and creamy chocolate pudding',
      photo: 'assets/food3.jpg',
      mood: 'unfocused',
    },
    {
      name: 'Chocolate Souffle',
      description: 'Light and fluffy chocolate souffle',
      photo: 'assets/food1.jpg',
      mood: 'unfocused',
    },
    {
      name: 'Chocolate Truffles',
      description: 'Rich and decadent chocolate truffles',
      photo: 'assets/food2.jpg',
      mood: 'sad',
    },
  ];

  getAllFoodItems(): FoodItem[] {
    return this.foodItem;
  }

  getMoodFoodItems(mood: string): FoodItem[] {
    return this.foodItem.filter((foodItem) => foodItem.mood === mood);
  }
}
