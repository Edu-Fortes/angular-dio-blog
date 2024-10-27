import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import postsData from '../../utils/postsData';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css',
})
export class PostsListComponent {
  posts = postsData;
}
