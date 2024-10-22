import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-post',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-post.component.html',
  styleUrl: './card-post.component.css',
})
export class CardPostComponent {
  @Input()
  photoCover: string = '';
  @Input()
  cardTitle: string = '';
  @Input()
  cardDescription: string = '';
  @Input()
  cardDate: string = '';
  @Input()
  cardAuthor: string = '';
  @Input()
  cardAuthorAvatar: string = '';
  @Input()
  id: string = '0';
}
