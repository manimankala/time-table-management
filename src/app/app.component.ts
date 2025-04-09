import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import {NavBarComponent} from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showNavbar = false;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Add all routes you want to show navbar on
        const showOnRoutes = ['/dashboard', '/timetable', '/home'];
        this.showNavbar = showOnRoutes.includes(event.urlAfterRedirects);
      }
    });
  }
  title = 'time-table-app';
}
