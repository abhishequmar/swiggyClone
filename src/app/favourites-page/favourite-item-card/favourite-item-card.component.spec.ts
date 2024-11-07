import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteItemCardComponent } from './favourite-item-card.component';

describe('FavouriteItemCardComponent', () => {
  let component: FavouriteItemCardComponent;
  let fixture: ComponentFixture<FavouriteItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouriteItemCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavouriteItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
