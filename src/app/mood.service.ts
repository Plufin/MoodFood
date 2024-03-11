import { Injectable } from '@angular/core';
import { Mood } from './mood';

@Injectable({
  providedIn: 'root',
})
export class MoodService {
  protected mood: Mood[] = [
    {
      name: 'Sad',
      description: 'Maybe these treats will help you feel better!',
      photo: 'assets/Sad.png',
    },
    {
      name: 'Stressed',
      description: 'Pick a snack or two to help you feel better!',
      photo: 'assets/Stressed.png',
    },
    {
      name: 'Bored',
      description: 'Crunchy snack or a spicy treat? You decide!',
      photo: 'assets/Bored.png',
    },
    {
      name: 'Tired',
      description: 'Sleep is important, but so is a good and healthy snack!',
      photo: 'assets/Tired.png',
    },
    {
      name: 'Unfocused',
      description:
        'Daydreaming is okay, but now you need the snack for the task!',
      photo: 'assets/Unfocused.png',
    },
  ];

  getAllMoods(): Mood[] {
    return this.mood;
  }

  getMood(name: string): Mood | undefined {
    return this.mood.find((mood) => mood.name === name);
  }
}
