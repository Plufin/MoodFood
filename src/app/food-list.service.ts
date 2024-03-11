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
      description:
        'Rich in omega-3 fatty acids, fish like salmon, sardines, and trout offer incredible benefits for those feeling bad. Omega-3s are crucial for brain health, helping to regulate mood by increasing the levels of serotonin, a neurotransmitter associated with happiness. The anti-inflammatory properties of these fatty acids also combat neuroinflammation, which can lead to mood disorders. Including fish in your diet not only nourishes your body with high-quality protein but also provides essential nutrients that support emotional well-being.',
      contains: 'omega-3 fatty acids',
      photo: 'assets/Fish.jpg',
      mood: 'sad',
    },
    {
      name: 'Walnuts',
      description:
        'Packed with omega-3 fatty acids, B Vitamins, walnuts and other nuts are a potent snack for combating sadness. These nutrients are vital for brain health, aiding in the reduction of stress levels and improving mood. The inclusion of Vitamin D in walnuts further enhances their mood-lifting properties, as Vitamin D deficiency has been linked to increased levels of depression. Nuts, with their combination of healthy fats, proteins, and essential vitamins, serve as an excellent dietary addition for boosting overall mood and resilience against stress.',
      contains: 'omega-3 fatty acids, Vitamin D',
      photo: 'assets/Walnut.jpg',
      mood: 'sad',
    },
    {
      name: 'Nuts',
      description:
        'Packed with omega-3 fatty acids, B Vitamins and antioxidants, nuts are a potent snack for combating sadness. These nutrients are vital for brain health, aiding in the reduction of stress levels and improving mood. Nuts, with their combination of healthy fats, proteins, and essential vitamins, serve as an excellent dietary addition for boosting overall mood and resilience against stress.',
      contains: 'omega-3 fatty acids, B Vitamins',
      photo: 'assets/Nuts.jpg',
      mood: 'sad',
    },
    {
      name: 'Leafy greens',
      description:
        'Leafy greens are powerhouses of B Vitamins, crucial for those feeling down. B Vitamins, particularly folate and B12, play significant roles in mood regulation and brain function. Adequate intake of these vitamins can help alleviate symptoms of depression and improve mood by contributing to the production of serotonin and dopamine, neurotransmitters responsible for feelings of well-being. Integrating these foods into your diet can offer a natural way to support emotional health and combat sadness.',
      contains: 'B Vitamins',
      photo: 'assets/Leafy.jpg',
      mood: 'sad',
    },
    {
      name: 'Legumes',
      description:
        'Legumes are powerhouses of B Vitamins, crucial for those feeling down. B Vitamins, particularly folate and B12, play significant roles in mood regulation and brain function. Adequate intake of these vitamins can help alleviate symptoms of depression and improve mood by contributing to the production of serotonin and dopamine, neurotransmitters responsible for feelings of well-being. Integrating these foods into your diet can offer a natural way to support emotional health and combat sadness.',
      contains: 'B Vitamins',
      photo: 'assets/Legume.jpg',
      mood: 'sad',
    },
    {
      name: 'Yogurt',
      description:
        'These fermented foods are rich in probiotics, beneficial bacteria that play a crucial role in maintaining gut health. There is a strong connection between the gut and the brain, often referred to as the gut-brain axis. Probiotics in yogurt, kefir, and kombucha can improve gut health, which in turn can lead to reduced inflammation and lower stress levels, mitigating feelings of sadness. Regular consumption of these probiotic-rich foods can help enhance your mood and emotional well-being.',
      contains: 'Probiotics',
      photo: 'assets/Yogurt.jpg',
      mood: 'sad',
    },
    {
      name: 'Kefir',
      description:
        'These fermented foods are rich in probiotics, beneficial bacteria that play a crucial role in maintaining gut health. There is a strong connection between the gut and the brain, often referred to as the gut-brain axis. Probiotics in yogurt, kefir, and kombucha can improve gut health, which in turn can lead to reduced inflammation and lower stress levels, mitigating feelings of sadness. Regular consumption of these probiotic-rich foods can help enhance your mood and emotional well-being.',
      contains: 'Probiotics',
      photo: 'assets/Kefir.jpg',
      mood: 'sad',
    },
    {
      name: 'Kombucha',
      description:
        'These fermented foods are rich in probiotics, beneficial bacteria that play a crucial role in maintaining gut health. There is a strong connection between the gut and the brain, often referred to as the gut-brain axis. Probiotics in yogurt, kefir, and kombucha can improve gut health, which in turn can lead to reduced inflammation and lower stress levels, mitigating feelings of sadness. Regular consumption of these probiotic-rich foods can help enhance your mood and emotional well-being.',
      contains: 'Probiotics',
      photo: 'assets/Kombucha.jpg',
      mood: 'sad',
    },
    {
      name: 'Dark Chocolate',
      description:
        'Dark chocolate is a delightful treat for those feeling sad, thanks to its content of flavonoids, caffeine, and theobromine. These compounds have been found to improve mood and alleviate symptoms of depression. Flavonoids, in particular, promote brain health by improving blood flow to the brain and enhancing brain function, which can help in dealing with stress and sadness. The mild stimulant effect of caffeine and theobromine also offers a quick mood lift.',
      contains: 'flavonoids, caffeine, theobromine',
      photo: 'assets/DarkChocolate.jpg',
      mood: 'sad',
    },

    //STRESSED
    {
      name: 'Citrus fruits',
      description:
        'Loaded with Vitamin C, these foods are excellent for combating stress. Vitamin C has been shown to lower blood pressure and cortisol, a stress hormone, helping you feel more relaxed and less anxious. The antioxidant properties of Vitamin C also protect against oxidative stress, improving your resilience in stressful situations.',
      contains: 'Vitamin C',
      photo: 'assets/Sitrus.jpg',
      mood: 'stressed',
    },
    {
      name: 'Strawberries',
      description:
        'Loaded with Vitamin C, these foods are excellent for combating stress. Vitamin C has been shown to lower blood pressure and cortisol, a stress hormone, helping you feel more relaxed and less anxious. The antioxidant properties of Vitamin C also protect against oxidative stress, improving your resilience in stressful situations.',
      contains: 'Vitamin C',
      photo: 'assets/Strawberry.jpg',
      mood: 'stressed',
    },
    {
      name: 'Bell Peppers',
      description:
        'Loaded with Vitamin C, these foods are excellent for combating stress. Vitamin C has been shown to lower blood pressure and cortisol, a stress hormone, helping you feel more relaxed and less anxious. The antioxidant properties of Vitamin C also protect against oxidative stress, improving your resilience in stressful situations.',
      contains: 'Vitamin C',
      photo: 'assets/Pepper.jpg',
      mood: 'stressed',
    },
    {
      name: 'Tomatoes',
      description:
        'Tomatoes are rich in lycopene, an antioxidant that reduces stress-induced inflammation. This is essential for maintaining a calm state of mind and reducing feelings of stress.',
      contains: 'Lycopene',
      photo: 'assets/Tomatoes.jpg',
      mood: 'stressed',
    },
    {
      name: 'Leafy Greens',
      description:
        'Leafy greens provide magnesium, a mineral that helps with relaxation and stress reduction. This is essential for maintaining a calm state of mind and reducing feelings of stress.',
      contains: 'Magnesium',
      photo: 'assets/Leafy.jpg',
      mood: 'stressed',
    },
    {
      name: 'Nuts ',
      description: 'Creamy and delicious chocolate ice cream',
      contains: 'Omega-3 fatty acids, Magnesium',
      photo: 'assets/food3.jpg',
      mood: 'stressed',
    },
    {
      name: 'Seeds',
      description:
        'Seeds like pumpkin and sunflower are high in magnesium, which helps reduce stress levels by maintaining nerve and muscle function.',
      contains: 'Magnesium',
      photo: 'assets/Seeds.jpg',
      mood: 'stressed',
    },
    {
      name: 'Whole Grains',
      description:
        'Whole grains provide magnesium as well and are a good source of fiber, helping to keep blood sugar levels stable, which is crucial for managing stress. For those feeling tired, whole grains and legumes offer complex carbohydrates that provide a steady source of energy, helping to combat fatigue. These foods help maintain stable blood sugar levels, ensuring a consistent energy supply throughout the day.',
      contains: 'Magnesium',
      photo: 'assets/WholeGrain.jpg',
      mood: 'stressed',
    },
    {
      name: 'Fish',
      description: '',
      contains: 'omega-3 fatty acids',
      photo: 'assets/Fish.jpg',
      mood: 'stressed',
    },
    //BORED
    {
      name: 'Carrots',
      description:
        'The act of crunching on carrots can be a satisfying way to combat boredom. These foods not only provide a sensory experience that can help distract from the monotony but also supply essential nutrients that support overall health.',
      contains: 'Crunch',
      photo: 'assets/Carrot.jpg',
      mood: 'bored',
    },
    {
      name: 'Celery',
      description:
        'The act of crunching on celery can be a satisfying way to combat boredom. These foods not only provide a sensory experience that can help distract from the monotony but also supply essential nutrients that support overall health.',
      contains: 'Crunch',
      photo: 'assets/Celery.jpg',
      mood: 'bored',
    },
    {
      name: 'Nuts',
      description:
        'The act of crunching nuts can be a satisfying way to combat boredom. These foods not only provide a sensory experience that can help distract from the monotony but also supply essential nutrients that support overall health.',
      contains: 'Crunch',
      photo: 'assets/Nuts.jpg',
      mood: 'bored',
    },
    {
      name: 'Seeds',
      description:
        'The act of crunching seeds can be a satisfying way to combat boredom. These foods not only provide a sensory experience that can help distract from the monotony but also supply essential nutrients that support overall health.',
      contains: 'Crunch',
      photo: 'assets/Seeds.jpg',
      mood: 'bored',
    },
    {
      name: 'Chili',
      description:
        'The spice from chili can kickstart your senses, providing a jolt of excitement that can alleviate feelings of boredom.',
      contains: 'Spice',
      photo: 'assets/Chili.jpg',
      mood: 'bored',
    },
    {
      name: 'New Flavors',
      description:
        'Experimenting with new flavors can also introduce a sense of novelty and curiosity in your meals, breaking the cycle of boredom.',
      contains: '',
      photo: 'assets/food3.jpg',
      mood: 'bored',
    },
    //TIRED
    {
      name: 'Whole Grains',
      description:
        'For those feeling tired, whole grains and legumes offer complex carbohydrates that provide a steady source of energy, helping to combat fatigue. These foods help maintain stable blood sugar levels, ensuring a consistent energy supply throughout the day.',
      contains: 'Complex Carbohydrates',
      photo: 'assets/WholeGrain.jpg',
      mood: 'tired',
    },
    {
      name: 'Legumes',
      description: '',
      contains: 'Complex Carbohydrates',
      photo: 'assets/Legume.jpg',
      mood: 'tired',
    },
    {
      name: 'Chicken',
      description:
        'Lean proteins such as chicken and turkey provide the amino acids necessary for energy production and muscle maintenance, which is essential for fighting fatigue. These sources of lean protein also support sustained energy levels without the crash associated with high-sugar foods.',
      contains: 'Lean Protein',
      photo: 'assets/Chicken.jpg',
      mood: 'tired',
    },
    {
      name: 'Turkey',
      description:
        'Lean proteins such as chicken and turkey provide the amino acids necessary for energy production and muscle maintenance, which is essential for fighting fatigue. These sources of lean protein also support sustained energy levels without the crash associated with high-sugar foods.',
      contains: 'Lean Protein',
      photo: 'assets/Turkey.jpg',
      mood: 'tired',
    },
    {
      name: 'Fish',
      description:
        'Lean proteins such as chicken, turkey anf fish provide the amino acids necessary for energy production and muscle maintenance, which is essential for fighting fatigue. These sources of lean protein also support sustained energy levels without the crash associated with high-sugar foods.',
      contains: 'Lean Protein',
      photo: 'assets/Fish.jpg',
      mood: 'tired',
    },
    {
      name: 'Lentils',
      description:
        'High in iron, lentils are crucial for those feeling tired. Iron is vital for the production of hemoglobin, which carries oxygen throughout the body. Adequate oxygen levels are essential for energy and alertness, making these foods key in combating fatigue. Iron deficiency can lead to anemia, characterized by tiredness and weakness, so including these iron-rich foods in your diet can help maintain your energy levels and overall vitality.',
      contains: 'Lean Protein, Iron',
      photo: 'assets/Lentils.jpg',
      mood: 'tired',
    },
    {
      name: 'Chickpeas',
      description:
        'Lean proteins provide the amino acids necessary for energy production and muscle maintenance, which is essential for fighting fatigue. These sources of lean protein also support sustained energy levels without the crash associated with high-sugar foods.',
      contains: 'Lean Protein',
      photo: 'assets/Chickpeas.jpg',
      mood: 'tired',
    },
    {
      name: 'Spinach',
      description:
        'High in iron, spinach are crucial for those feeling tired. Iron is vital for the production of hemoglobin, which carries oxygen throughout the body. Adequate oxygen levels are essential for energy and alertness, making these foods key in combating fatigue. Iron deficiency can lead to anemia, characterized by tiredness and weakness, so including these iron-rich foods in your diet can help maintain your energy levels and overall vitality.',
      contains: 'Iron',
      photo: 'assets/Spinach.jpg',
      mood: 'tired',
    },
    {
      name: 'Red Meat',
      description:
        'As a prime source of iron, red meat can significantly combat tiredness. Iron from red meat is easily absorbed by the body, making it especially effective in preventing and correcting iron deficiency anemia, a common cause of fatigue. Additionally, red meat provides high-quality protein and B vitamins, essential for energy production and maintaining optimal energy levels throughout the day. For those feeling tired, incorporating moderate amounts of lean red meat into your diet can help boost your energy and improve your mood.',
      contains: 'Iron',
      photo: 'assets/RedMeat.jpg',
      mood: 'tired',
    },
    {
      name: 'Water',
      description:
        'Hydration is crucial for combatting tiredness, and water is the most direct way to stay hydrated. Keeping well-hydrated is essential for maintaining energy levels, as even mild dehydration can lead to feelings of fatigue and decreased alertness.',
      contains: '',
      photo: 'assets/Water.jpg',
      mood: 'tired',
    },
    {
      name: 'Herbal Teas',
      description:
        'Hydration is crucial for combatting tiredness, and water is the most direct way to stay hydrated. Keeping well-hydrated is essential for maintaining energy levels, as even mild dehydration can lead to feelings of fatigue and decreased alertness.',
      contains: 'Water',
      photo: 'assets/Herbal.jpg',
      mood: 'tired',
    },
    {
      name: 'Cucumber',
      description:
        'Hydration is crucial for combatting tiredness, and water is the most direct way to stay hydrated. However, foods like cucumber are not only refreshing but also provide a hydrating boost due to their high water content. Keeping well-hydrated is essential for maintaining energy levels, as even mild dehydration can lead to feelings of fatigue and decreased alertness.',
      contains: 'Water',
      photo: 'assets/Cucumber.jpg',
      mood: 'tired',
    },
    {
      name: 'Watermelon',
      description:
        'Hydration is crucial for combatting tiredness, and water is the most direct way to stay hydrated. However, foods like watermelon are not only refreshing but also provide a hydrating boost due to their high water content. Keeping well-hydrated is essential for maintaining energy levels, as even mild dehydration can lead to feelings of fatigue and decreased alertness.',
      contains: 'Water',
      photo: 'assets/Watermelon.jpg',
      mood: 'tired',
    },
    //UNFOCUSED
    {
      name: 'Berries',
      description:
        'Berries and nuts are rich in antioxidants, which protect the brain from oxidative stress, improving focus and cognitive function. Dark chocolate, with its flavonoids and mild stimulants like caffeine and theobromine, can enhance brain function, helping to improve concentration and reduce feelings of being unfocused. Together, these foods support brain health and cognitive performance, making them ideal for those looking to sharpen their focus.',
      contains: 'Antioxidants',
      photo: 'assets/Berries.jpg',
      mood: 'unfocused',
    },
    {
      name: 'Nuts',
      description: '',
      contains: 'Antioxidants',
      photo: 'assets/Nuts.jpg',
      mood: 'unfocused',
    },
    {
      name: 'Dark Chocolate',
      description: '',
      contains: 'Antioxidants',
      photo: 'assets/DarkChocolate.jpg',
      mood: 'unfocused',
    },
    {
      name: 'Eggs',
      description:
        'These foods provide high-quality protein and essential nutrients that support brain function and concentration. Eggs, for example, contain choline, a nutrient that is crucial for brain health and cognitive function. Lean meats and fish provide amino acids and omega-3 fatty acids, respectively, which are essential for maintaining the structure and function of brain cells, thereby helping to improve focus and reduce feelings of being unfocused.',
      contains: '',
      photo: 'assets/Egg.jpg',
      mood: 'unfocused',
    },
    {
      name: 'Lean Meats',
      description: '',
      contains: '',
      photo: 'assets/LeanMeat.jpg',
      mood: 'unfocused',
    },
    {
      name: 'Fish',
      description: '',
      contains: '',
      photo: 'assets/Fish.jpg',
      mood: 'unfocused',
    },
    {
      name: 'Coffee',
      description:
        'Both coffee and green tea contain caffeine, a well-known stimulant that can enhance alertness and concentration. Green tea also contains L-theanine, an amino acid that can work synergistically with caffeine to improve brain function without causing the jitters often associated with coffee consumption. These beverages can provide a mental boost for those feeling unfocused, helping to improve concentration and cognitive performance.',
      contains: 'Caffeine, L-Theanine',
      photo: 'assets/Coffee.jpg',
      mood: 'unfocused',
    },
    {
      name: 'Green Tea',
      description:
        'Both coffee and green tea contain caffeine, a well-known stimulant that can enhance alertness and concentration. Green tea also contains L-theanine, an amino acid that can work synergistically with caffeine to improve brain function without causing the jitters often associated with coffee consumption. These beverages can provide a mental boost for those feeling unfocused, helping to improve concentration and cognitive performance.',
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
