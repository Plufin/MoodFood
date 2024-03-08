import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'MoodFood - Home page',
  },
  {
    path: 'mood/:name',
    component: DetailsComponent,
    title: 'MoodFood - Mood Details',
  },
  {
    path: 'item/:name',
    component: FoodDetailComponent,
    title: 'MoodFood - Food Details',
  },
];

export default routeConfig;
