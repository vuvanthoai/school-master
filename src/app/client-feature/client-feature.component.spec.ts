import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientFeatureComponent } from './client-feature.component';

describe('ClientFeatureComponent', () => {
  let component: ClientFeatureComponent;
  let fixture: ComponentFixture<ClientFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
