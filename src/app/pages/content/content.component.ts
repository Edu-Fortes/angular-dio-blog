import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  constructor(private location: Location, private route: ActivatedRoute) {}

  back(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      console.log(params.get('id'));
    });
  }
}
