import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroPostComponent } from './components/hero-post/hero-post.component';
import { CardPostComponent } from './components/card-post/card-post.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeroPostComponent,
    CardPostComponent,
    CallToActionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
