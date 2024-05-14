import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchHandlerComponent } from './search-handler.component';

describe('SearchHandlerComponent', () => {
  let component: SearchHandlerComponent;
  let fixture: ComponentFixture<SearchHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchHandlerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
