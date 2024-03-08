import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule],
  template: `
    <main>
      <nav class="brand-name">
        <a [routerLink]="['/']"><h1>MoodFood</h1></a>
      </nav>
      <section class="content">
        <div class="moodBox"><router-outlet></router-outlet></div>
      </section>
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'MoodFood';
}
