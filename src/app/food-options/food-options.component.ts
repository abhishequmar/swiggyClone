import { Component } from '@angular/core';
import { FoodItemComponent } from '../food-item/food-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-options',
  standalone: true,
  imports: [FoodItemComponent, CommonModule],
  templateUrl: './food-options.component.html',
  styleUrl: './food-options.component.css'
})
export class FoodOptionsComponent {
  foodItems = [
    {
      firstName: 'North Indian',
      firstImageUrl: 'assets/North_Indian.png',
      secondName: 'Pizza',
      secondImageUrl: 'assets/Pizza.png'
    },
    {
      firstName: 'Biryani',
      firstImageUrl: 'assets/Biryani.png',
      secondName: 'Chole Bhature',
      secondImageUrl: 'assets/Chole_Bhature.png'
    },
    {
      firstName: 'Chinese',
      firstImageUrl: 'assets/Chinese.png',
      secondName: 'Burger',
      secondImageUrl: 'assets/Burger.png'
    },
    {
      firstName: 'Paratha',
      firstImageUrl: 'assets/Paratha.png',
      secondName: 'South Indian',
      secondImageUrl: 'assets/South_Indian.png'
    },
    {
      firstName: 'Pav Bhaji',
      firstImageUrl: 'assets/Pav_Bhaji.png',
      secondName: 'Shake',
      secondImageUrl: 'assets/Shake.png'
    },
    {
      firstName: 'Pure Veg',
      firstImageUrl: 'assets/Pure_Veg.png',
      secondName: 'Noodles',
      secondImageUrl: 'assets/Noodles.png'
    },
  ];

  scrollLeft(element: HTMLElement) {
    element.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight(element: HTMLElement) {
    element.scrollBy({ left: 200, behavior: 'smooth' });
  }
}
