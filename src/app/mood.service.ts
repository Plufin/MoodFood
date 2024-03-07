import { Injectable } from '@angular/core';
import { Mood } from './mood';

@Injectable({
  providedIn: 'root',
})
export class MoodService {
  protected mood: Mood[] = [
    {
      name: 'Sad',
      description: 'Feeling down? Try these comfort foods.',
      photo: 'assets/sad.jpg',
    },
    {
      name: 'Stressed',
      description: 'Feeling overwhelmed? Try these comfort foods.',
      photo: 'assets/food1.jpg',
    },
    {
      name: 'Bored',
      description: 'Feeling uninterested? Try these comfort foods.',
      photo: 'assets/sad.jpg',
    },
    {
      name: 'Tired',
      description: 'Feeling exhausted? Try these comfort foods.',
      photo: 'assets/food2.jpg',
    },
    {
      name: 'Unfocused',
      description: 'Feeling distracted? Try these comfort foods.',
      photo: 'assets/sad.jpg',
    },
  ];

  getAllMoods(): Mood[] {
    return this.mood;
  }

  getMood(name: string): Mood | undefined {
    return this.mood.find((mood) => mood.name === name);
  }
}
