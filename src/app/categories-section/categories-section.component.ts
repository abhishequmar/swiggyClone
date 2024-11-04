import { Component } from '@angular/core';
import { CategoryCardComponent } from '../category-card/category-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories-section',
  standalone: true,
  imports: [CategoryCardComponent, CommonModule],
  templateUrl: './categories-section.component.html',
  styleUrl: './categories-section.component.css'
})
export class CategoriesSectionComponent {
   categories = [
    {
      imageUrl: 'assets/food_delivery.avif'
    },
    {

      imageUrl: 'assets/instamart.avif'
    },
    {
      imageUrl: 'assets/dineout.avif'
    },
    {
      imageUrl: 'assets/genie.avif'
    }
  ];

}
