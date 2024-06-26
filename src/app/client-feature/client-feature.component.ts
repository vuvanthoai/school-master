import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavHeaderComponent } from '@school-master/common-ui/nav-header';
import { FooterComponent } from '@school-master/common-ui/footer';

@Component({
  selector: 'app-client-feature',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavHeaderComponent, FooterComponent],
  templateUrl: './client-feature.component.html',
  styleUrl: './client-feature.component.scss',
})
export class ClientFeatureComponent {}
