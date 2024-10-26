import { Component } from '@angular/core';
import postsData from '../../utils/postsData';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css',
})
export class PostsListComponent {
  posts = postsData;
}
