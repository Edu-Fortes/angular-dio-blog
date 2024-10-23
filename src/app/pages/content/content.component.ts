import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import postsData from '../../utils/postsData';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  constructor(private location: Location, private route: ActivatedRoute) {}

  private id: string | null = '0';
  contentCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  contentAuthor: string = '';
  contentAvatar: string = '';
  contentDate: string = '';
  contentMain: string[] = [];

  back(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');

      this.setValuesToComponent(this.id);
    });
  }

  setValuesToComponent(id: string | null): void {
    const result = postsData.filter((article) => article.id === id)[0];

    this.contentCover = result.cover;
    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.contentAuthor = result.author;
    this.contentAvatar = result.avatar;
    this.contentDate = result.date;
    this.contentMain = result.content;
  }
}
