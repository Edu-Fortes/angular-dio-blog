import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { PostsComponent } from './pages/posts/posts.component';

export const routes: Routes = [
  {
    path: 'posts/:id',
    component: ContentComponent,
  },
  { path: 'posts', component: PostsComponent },
  { path: '', component: HomeComponent },
];
