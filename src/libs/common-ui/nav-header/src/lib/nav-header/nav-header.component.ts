import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NAVIGATION_URL_VALUES } from '@school-master/utilities/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.scss',
})
export class NavHeaderComponent {
  readonly NAVIGATION_URL_VALUES = NAVIGATION_URL_VALUES;

  constructor(private router: Router) {}

  handleNavigation(url: NAVIGATION_URL_VALUES) {
    void this.router.navigate([url]);
  }
}
