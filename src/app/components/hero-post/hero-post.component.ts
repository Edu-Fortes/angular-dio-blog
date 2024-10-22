import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-post',
  standalone: true,
  imports: [RouterLink],
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
  @Input()
  id: string = '0';
}
