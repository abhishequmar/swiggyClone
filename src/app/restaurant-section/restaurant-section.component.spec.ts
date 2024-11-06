import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSectionComponent } from './restaurant-section.component';

describe('RestaurantSectionComponent', () => {
  let component: RestaurantSectionComponent;
  let fixture: ComponentFixture<RestaurantSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
