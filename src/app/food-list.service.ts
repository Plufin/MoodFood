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
      photo: 'assets/Fish.jpg',
      mood: 'sad',
    },
    {
      name: 'Walnuts',
      description: 'Rich and decadent chocolate truffles',
      contains: 'omega-3 fatty acids, Vitamin D',
      photo: 'assets/Walnut.jpg',
      mood: 'sad',
    },
    {
      name: 'Nuts',
      description: 'Rich and decadent chocolate truffles',
      contains: 'omega-3 fatty acids, B Vitamins',
      photo: 'assets/Nuts.jpg',
      mood: 'sad',
    },
    {
      name: 'Leafy greens',
      description: 'Rich and decadent chocolate truffles',
      contains: 'B Vitamins',
      photo: 'assets/Leafy.jpg',
      mood: 'sad',
    },
    {
      name: 'Legumes',
      description: 'Rich and decadent chocolate truffles',
      contains: 'B Vitamins',
      photo: 'assets/Legume.jpg',
      mood: 'sad',
    },
    {
      name: 'Yogurt',
      description: 'Rich and decadent chocolate truffles',
      contains: 'Probiotics',
      photo: 'assets/Yogurt.jpg',
      mood: 'sad',
    },
    {
      name: 'Kefir',
      description: 'Rich and decadent chocolate truffles',
      contains: 'Probiotics',
      photo: 'assets/Kefir.jpg',
      mood: 'sad',
    },
    {
      name: 'Kombucha',
      description: 'Rich and decadent chocolate truffles',
      contains: 'Probiotics',
      photo: 'assets/Kombucha.jpg',
      mood: 'sad',
    },
    {
      name: 'Dark Chocolate',
      description: 'Rich and decadent chocolate truffles',
      contains: 'flavonoids, caffeine, theobromine',
      photo: 'assets/DarkChocolate.jpg',
      mood: 'sad',
    },

    //STRESSED
    {
      name: 'Citrus fruits',
      description: 'Rich and decadent chocolate truffles',
      contains: 'Vitamin C',
      photo: 'assets/Sitrus.jpg',
      mood: 'stressed',
    },
    {
      name: 'Strawberries',
      description: 'Light and airy chocolate mousse',
      contains: 'Vitamin C',
      photo: 'assets/Strawberry.jpg',
      mood: 'stressed',
    },
    {
      name: 'Bell Peppers',
      description: 'Soft and chewy chocolate chip cookies',
      contains: 'Vitamin C',
      photo: 'assets/Pepper.jpg',
      mood: 'stressed',
    },
    {
      name: 'Tomatoes',
      description: 'Creamy and delicious chocolate ice cream',
      contains: '',
      photo: 'assets/Tomatoes.jpg',
      mood: 'stressed',
    },
    {
      name: 'Leafy Greens',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Magnesium',
      photo: 'assets/Leafy.jpg',
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
      name: 'Seeds',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Magnesium',
      photo: 'assets/Seeds.jpg',
      mood: 'stressed',
    },
    {
      name: 'Whole Grains',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Magnesium',
      photo: 'assets/WholeGrain.jpg',
      mood: 'stressed',
    },
    {
      name: 'Fish',
      description: 'salmon, sardines, and trout',
      contains: 'omega-3 fatty acids',
      photo: 'assets/Fish.jpg',
      mood: 'stressed',
    },
    //BORED
    {
      name: 'Carrots',
      description: 'Soft and chewy chocolate chip cookies',
      contains: 'Crunch',
      photo: 'assets/Carrot.jpg',
      mood: 'bored',
    },
    {
      name: 'Celery',
      description: 'Soft and chewy chocolate chip cookies',
      contains: 'Crunch',
      photo: 'assets/Celery.jpg',
      mood: 'bored',
    },
    {
      name: 'Nuts',
      description: 'Soft and chewy chocolate chip cookies',
      contains: 'Crunch',
      photo: 'assets/Nuts.jpg',
      mood: 'bored',
    },
    {
      name: 'Seeds',
      description: 'Soft and chewy chocolate chip cookies',
      contains: 'Crunch',
      photo: 'assets/Seeds.jpg',
      mood: 'bored',
    },
    {
      name: 'Chili',
      description: 'Soft and chewy chocolate chip cookies',
      contains: 'Spice',
      photo: 'assets/Chili.jpg',
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
      name: 'Whole Grains',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Complex Carbohydrates',
      photo: 'assets/WholeGrain.jpg',
      mood: 'tired',
    },
    {
      name: 'Legumes',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Complex Carbohydrates',
      photo: 'assets/Legume.jpg',
      mood: 'tired',
    },
    {
      name: 'Chicken',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Lean Protein',
      photo: 'assets/Chicken.jpg',
      mood: 'tired',
    },
    {
      name: 'Turkey',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Lean Protein',
      photo: 'assets/Turkey.jpg',
      mood: 'tired',
    },
    {
      name: 'Fish',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Lean Protein',
      photo: 'assets/Fish.jpg',
      mood: 'tired',
    },
    {
      name: 'Lentils',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Lean Protein, Iron',
      photo: 'assets/Lentils.jpg',
      mood: 'tired',
    },
    {
      name: 'Chickpeas',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Lean Protein',
      photo: 'assets/Chickpeas.jpg',
      mood: 'tired',
    },
    {
      name: 'Spinach',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Iron',
      photo: 'assets/Spinach.jpg',
      mood: 'tired',
    },
    {
      name: 'Red Meat',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Iron',
      photo: 'assets/RedMeat.jpg',
      mood: 'tired',
    },
    {
      name: 'Water',
      description: 'Creamy and delicious chocolate ice cream',
      contains: '',
      photo: 'assets/Water.jpg',
      mood: 'tired',
    },
    {
      name: 'Herbal Teas',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Water',
      photo: 'assets/Herbal.jpg',
      mood: 'tired',
    },
    {
      name: 'Cucumber',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Water',
      photo: 'assets/Cucumber.jpg',
      mood: 'tired',
    },
    {
      name: 'Watermelon',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Water',
      photo: 'assets/Watermelon.jpg',
      mood: 'tired',
    },
    //UNFOCUSED
    {
      name: 'Berries',
      description: 'Thick and creamy chocolate milkshake',
      contains: 'Antioxidants',
      photo: 'assets/Berries.jpg',
      mood: 'unfocused',
    },
    {
      name: 'Nuts',
      description: 'Smooth and creamy chocolate pudding',
      contains: 'Antioxidants',
      photo: 'assets/Nuts.jpg',
      mood: 'unfocused',
    },
    {
      name: 'Dark Chocolate',
      description: 'Light and fluffy chocolate souffle',
      contains: 'Antioxidants',
      photo: 'assets/DarkChocolate.jpg',
      mood: 'unfocused',
    },
    {
      name: 'Eggs',
      description: 'Light and fluffy chocolate souffle',
      contains: '',
      photo: 'assets/Egg.jpg',
      mood: 'unfocused',
    },
    {
      name: 'Lean Meats',
      description: 'Light and fluffy chocolate souffle',
      contains: '',
      photo: 'assets/LeanMeat.jpg',
      mood: 'unfocused',
    },
    {
      name: 'Fish',
      description: 'Light and fluffy chocolate souffle',
      contains: '',
      photo: 'assets/Fish.jpg',
      mood: 'unfocused',
    },
    {
      name: 'Coffee',
      description: 'Light and fluffy chocolate souffle',
      contains: 'Caffeine, L-Theanine',
      photo: 'assets/Coffee.jpg',
      mood: 'unfocused',
    },
    {
      name: 'Green Tea',
      description: 'Light and fluffy chocolate souffle',
      contains: 'Caffeine, L-Theanine',
      photo: 'assets/GreenTea.jpg',
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
