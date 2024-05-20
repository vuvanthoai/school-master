import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmationActiveComponent } from './confirmation-active.component';

describe('ConfirmationActiveComponent', () => {
  let component: ConfirmationActiveComponent;
  let fixture: ComponentFixture<ConfirmationActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationActiveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmationActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
