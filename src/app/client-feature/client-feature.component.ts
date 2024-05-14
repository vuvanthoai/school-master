import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavHeaderComponent } from '@school-master/common-ui/nav-header';

@Component({
  selector: 'app-client-feature',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavHeaderComponent],
  templateUrl: './client-feature.component.html',
  styleUrl: './client-feature.component.scss',
})
export class ClientFeatureComponent {}
