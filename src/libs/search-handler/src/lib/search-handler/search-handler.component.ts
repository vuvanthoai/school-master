import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-handler',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-handler.component.html',
  styleUrl: './search-handler.component.scss',
})
export class SearchHandlerComponent {}
