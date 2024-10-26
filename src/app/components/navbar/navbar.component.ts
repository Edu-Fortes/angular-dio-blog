import { Component } from '@angular/core';
import menuList from '../../utils/menuList';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  menuList = menuList;
}
