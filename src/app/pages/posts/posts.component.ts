import { Component } from '@angular/core';
import { PostsListComponent } from '../../components/posts-list/posts-list.component';
import postsData from '../../utils/postsData';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostsListComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  posts = postsData[0];
}
