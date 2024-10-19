import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-post',
  standalone: true,
  imports: [],
  templateUrl: './hero-post.component.html',
  styleUrl: './hero-post.component.css',
})
export class HeroPostComponent {
  @Input()
  photoCover: string = '';
  @Input()
  cardTitle: string = '';
  @Input()
  cardDescription: string = '';
}
