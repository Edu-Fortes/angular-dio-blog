import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroPostComponent } from './components/hero-post/hero-post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroPostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
