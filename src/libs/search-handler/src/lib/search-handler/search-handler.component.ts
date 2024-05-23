import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatSlider, MatSliderRangeThumb } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import {
  NgbPagination,
  NgbPaginationFirst,
  NgbPaginationLast,
  NgbPaginationNext,
  NgbPaginationPrevious,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search-handler',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatCheckbox,
    FormsModule,
    MatSlider,
    MatSliderRangeThumb,
    NgbPagination,
    NgbPaginationPrevious,
    NgbPaginationNext,
    NgbPaginationLast,
    NgbPaginationFirst,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  templateUrl: './search-handler.component.html',
  styleUrl: './search-handler.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [provideNativeDateAdapter()],
})
export class SearchHandlerComponent {
  tasks = [
    { name: 'Primary', completed: false, color: 'primary' },
    { name: 'Accent', completed: false, color: 'primary' },
    { name: 'Warn', completed: false, color: 'primary' },
  ];
  pageNumber = 1;

  updateAllComplete() {
    console.log('=>>>');
  }
}
