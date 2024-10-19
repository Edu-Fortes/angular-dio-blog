import { Component } from '@angular/core';
import { HeroPostComponent } from '../../components/hero-post/hero-post.component';
import { CardPostComponent } from '../../components/card-post/card-post.component';
import { CallToActionComponent } from '../../components/call-to-action/call-to-action.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroPostComponent, CardPostComponent, CallToActionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
