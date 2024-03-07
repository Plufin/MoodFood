import { Injectable } from '@angular/core';
import { Mood } from './mood';

@Injectable({
  providedIn: 'root',
})
export class MoodService {
  protected mood: Mood[] = [
    {
      name: 'Sad',
      description: 'Feeling down? These might help you feel better.',
      photo: 'assets/sad.jpg',
    },
    {
      name: 'Stressed',
      description: 'Feeling overwhelmed? These might help you feel better.',
      photo: 'assets/food1.jpg',
    },
    {
      name: 'Bored',
      description: 'Feeling uninterested? These might help you feel better.',
      photo: 'assets/sad.jpg',
    },
    {
      name: 'Tired',
      description: 'Feeling exhausted? These might help you feel better.',
      photo: 'assets/food2.jpg',
    },
    {
      name: 'Unfocused',
      description: 'Feeling distracted? These might help you feel better.',
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
