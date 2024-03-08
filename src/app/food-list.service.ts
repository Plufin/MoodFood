import { Injectable } from '@angular/core';
import { FoodItem } from './food-items';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  protected foodItem: FoodItem[] = [
    //SAD
    {
      name: 'Fish',
      description: 'salmon, sardines, and trout',
      contains: 'omega-3 fatty acids',
      photo: 'assets/food1.jpg',
      mood: 'sad',
    },
    {
      name: 'Walnuts',
      description: 'Rich and decadent chocolate truffles',
      contains: 'omega-3 fatty acids, Vitamin D',
      photo: 'assets/food3.jpg',
      mood: 'sad',
    },
    {
      name: 'Nuts',
      description: 'Rich and decadent chocolate truffles',
      contains: 'omega-3 fatty acids, B Vitamins',
      photo: 'assets/food3.jpg',
      mood: 'sad',
    },
    {
      name: 'Leafy greens',
      description: 'Rich and decadent chocolate truffles',
      contains: 'B Vitamins',
      photo: 'assets/food3.jpg',
      mood: 'sad',
    },
    {
      name: 'Legumes',
      description: 'Rich and decadent chocolate truffles',
      contains: 'B Vitamins',
      photo: 'assets/food3.jpg',
      mood: 'sad',
    },
    {
      name: 'Yogurt',
      description: 'Rich and decadent chocolate truffles',
      contains: 'Probiotics',
      photo: 'assets/food3.jpg',
      mood: 'sad',
    },
    {
      name: 'Kefir',
      description: 'Rich and decadent chocolate truffles',
      contains: 'Probiotics',
      photo: 'assets/food3.jpg',
      mood: 'sad',
    },
    {
      name: 'Kombucha',
      description: 'Rich and decadent chocolate truffles',
      contains: 'Probiotics',
      photo: 'assets/food3.jpg',
      mood: 'sad',
    },
    {
      name: 'Dark Chocolate',
      description: 'Rich and decadent chocolate truffles',
      contains: 'flavonoids, caffeine, theobromine',
      photo: 'assets/food3.jpg',
      mood: 'sad',
    },

    //STRESSED
    {
      name: 'Citrus fruits',
      description: 'Rich and decadent chocolate truffles',
      contains: 'Vitamin C',
      photo: 'assets/food3.jpg',
      mood: 'stressed',
    },
    {
      name: 'strawberries',
      description: 'Light and airy chocolate mousse',
      contains: 'Vitamin C',
      photo: 'assets/food2.jpg',
      mood: 'stressed',
    },
    {
      name: 'bell peppers',
      description: 'Soft and chewy chocolate chip cookies',
      contains: 'Vitamin C',
      photo: 'assets/food3.jpg',
      mood: 'stressed',
    },
    {
      name: 'tomatoes',
      description: 'Creamy and delicious chocolate ice cream',
      contains: '',
      photo: 'assets/food3.jpg',
      mood: 'stressed',
    },
    {
      name: 'Leafy greens',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Magnesium',
      photo: 'assets/food3.jpg',
      mood: 'stressed',
    },
    {
      name: 'nuts ',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Omega-3 fatty acids, Magnesium',
      photo: 'assets/food3.jpg',
      mood: 'stressed',
    },
    {
      name: 'seeds',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Magnesium',
      photo: 'assets/food3.jpg',
      mood: 'stressed',
    },
    {
      name: 'Leafy greens',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Magnesium',
      photo: 'assets/food3.jpg',
      mood: 'stressed',
    },
    {
      name: 'whole grains',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Magnesium',
      photo: 'assets/food3.jpg',
      mood: 'stressed',
    },
    {
      name: 'Leafy greens',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Magnesium',
      photo: 'assets/food3.jpg',
      mood: 'stressed',
    },
    {
      name: 'Fish',
      description: 'salmon, sardines, and trout',
      contains: 'omega-3 fatty acids',
      photo: 'assets/food1.jpg',
      mood: 'stressed',
    },
    //BORED
    {
      name: 'Carrots',
      description: 'Soft and chewy chocolate chip cookies',
      contains: 'Crunch',
      photo: 'assets/food3.jpg',
      mood: 'bored',
    },
    {
      name: 'Celery',
      description: 'Soft and chewy chocolate chip cookies',
      contains: 'Crunch',
      photo: 'assets/food3.jpg',
      mood: 'bored',
    },
    {
      name: 'Nuts',
      description: 'Soft and chewy chocolate chip cookies',
      contains: 'Crunch',
      photo: 'assets/food3.jpg',
      mood: 'bored',
    },
    {
      name: 'Seeds',
      description: 'Soft and chewy chocolate chip cookies',
      contains: 'Crunch',
      photo: 'assets/food3.jpg',
      mood: 'bored',
    },
    {
      name: 'Chili',
      description: 'Soft and chewy chocolate chip cookies',
      contains: 'Spice',
      photo: 'assets/food3.jpg',
      mood: 'bored',
    },
    {
      name: 'New Flavors',
      description: 'Soft and chewy chocolate chip cookies',
      contains: '',
      photo: 'assets/food3.jpg',
      mood: 'bored',
    },
    //TIRED
    {
      name: 'whole grains',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Complex Carbohydrates',
      photo: 'assets/food3.jpg',
      mood: 'tired',
    },
    {
      name: 'legumes',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Complex Carbohydrates',
      photo: 'assets/food3.jpg',
      mood: 'tired',
    },
    {
      name: 'Chicken',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Lean Protein',
      photo: 'assets/food3.jpg',
      mood: 'tired',
    },
    {
      name: 'turkey',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Lean Protein',
      photo: 'assets/food3.jpg',
      mood: 'tired',
    },
    {
      name: 'fish',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Lean Protein',
      photo: 'assets/food3.jpg',
      mood: 'tired',
    },
    {
      name: 'lentils ',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Lean Protein, Iron',
      photo: 'assets/food3.jpg',
      mood: 'tired',
    },
    {
      name: 'chickpeas',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Lean Protein',
      photo: 'assets/food3.jpg',
      mood: 'tired',
    },
    {
      name: 'spinach',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Iron',
      photo: 'assets/food3.jpg',
      mood: 'tired',
    },
    {
      name: 'Red meat',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Iron',
      photo: 'assets/food3.jpg',
      mood: 'tired',
    },
    {
      name: 'Water',
      description: 'Creamy and delicious chocolate ice cream',
      contains: '',
      photo: 'assets/food3.jpg',
      mood: 'tired',
    },
    {
      name: 'Herbal teas',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Water',
      photo: 'assets/food3.jpg',
      mood: 'tired',
    },
    {
      name: 'Cucumber',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Water',
      photo: 'assets/food3.jpg',
      mood: 'tired',
    },
    {
      name: 'Watermelon',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Water',
      photo: 'assets/food3.jpg',
      mood: 'tired',
    },
    //UNFOCUSED
    {
      name: 'Berries',
      description: 'Thick and creamy chocolate milkshake',
      contains: 'Antioxidants',
      photo: 'assets/food1.jpg',
      mood: 'unfocused',
    },
    {
      name: 'Nuts',
      description: 'Smooth and creamy chocolate pudding',
      contains: 'Antioxidants',
      photo: 'assets/food3.jpg',
      mood: 'unfocused',
    },
    {
      name: 'Dark chocolate',
      description: 'Light and fluffy chocolate souffle',
      contains: 'Antioxidants',
      photo: 'assets/food1.jpg',
      mood: 'unfocused',
    },
    {
      name: 'Eggs',
      description: 'Light and fluffy chocolate souffle',
      contains: '',
      photo: 'assets/food1.jpg',
      mood: 'unfocused',
    },
    {
      name: 'Lean meats',
      description: 'Light and fluffy chocolate souffle',
      contains: '',
      photo: 'assets/food1.jpg',
      mood: 'unfocused',
    },
    {
      name: 'Fish',
      description: 'Light and fluffy chocolate souffle',
      contains: '',
      photo: 'assets/food1.jpg',
      mood: 'unfocused',
    },
    {
      name: 'Dark chocolate',
      description: 'Light and fluffy chocolate souffle',
      contains: '',
      photo: 'assets/food1.jpg',
      mood: 'unfocused',
    },
    {
      name: 'Coffee',
      description: 'Light and fluffy chocolate souffle',
      contains: 'Caffeine, L-Theanine',
      photo: 'assets/food1.jpg',
      mood: 'unfocused',
    },
    {
      name: 'Green tea',
      description: 'Light and fluffy chocolate souffle',
      contains: 'Caffeine, L-Theanine',
      photo: 'assets/food1.jpg',
      mood: 'unfocused',
    },
  ];

  getAllFoodItems(): FoodItem[] {
    return this.foodItem;
  }

  getMoodFoodItems(mood: string): FoodItem[] {
    return this.foodItem.filter((foodItem) => foodItem.mood === mood);
  }

  getFoodItem(name: string): FoodItem | undefined {
    return this.foodItem.find((foodItem) => foodItem.name === name);
  }
}
