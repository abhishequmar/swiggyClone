import { Component } from '@angular/core';
import { FoodItemComponent } from '../food-item/food-item.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-food-options',
  standalone: true,
  imports: [FoodItemComponent, CommonModule, RouterModule],
  templateUrl: './food-options.component.html',
  styleUrl: './food-options.component.css'
})
export class FoodOptionsComponent {
    dishId: string;

  constructor(private route: ActivatedRoute) {
    this.dishId = this.route.snapshot.paramMap.get('id') || '';
  }
  foodItems = [
  {
    firstId: 'North_Indian',
    firstImageUrl: 'assets/North_Indian.png',
    secondId: 'Paratha',
    secondImageUrl: 'assets/Paratha.png'
  },
  {
    firstId: 'Pizza',
    firstImageUrl: 'assets/Pizza.png',
    secondId: 'South_Indian',
    secondImageUrl: 'assets/South_Indian.png'
  },
  {
    firstId: 'Biryani',
    firstImageUrl: 'assets/Biryani.png',
    secondId: 'Pav_Bhaji',
    secondImageUrl: 'assets/Pav_Bhaji.png'
  },
  {
    firstId: 'Chole_Bhature',
    firstImageUrl: 'assets/Chole_Bhature.png',
    secondId: 'Shake',
    secondImageUrl: 'assets/Shake.png'
  },
  {
    firstId: 'Chinese',
    firstImageUrl: 'assets/Chinese.png',
    secondId: 'Pure_Veg',
    secondImageUrl: 'assets/Pure_Veg.png'
  },
  {
    firstId: 'Burger',
    firstImageUrl: 'assets/Burger.png',
    secondId: 'Noodles',
    secondImageUrl: 'assets/Noodles.png'
  },
  {
    firstId: 'Dosa',
    firstImageUrl: 'assets/Dosa.png',
    secondId: 'Salad',
    secondImageUrl: 'assets/Salad.png'
  },
  {
    firstId: 'Pasta',
    firstImageUrl: 'assets/Pasta.png',
    secondId: 'Rasmalai',
    secondImageUrl: 'assets/Rasmalai.png'
  },
  {
    firstId: 'Rolls',
    firstImageUrl: 'assets/Rolls.png',
    secondId: 'Pastry',
    secondImageUrl: 'assets/Pastry.png'
  },
  {
    firstId: 'Cake',
    firstImageUrl: 'assets/Cake.png',
    secondId: 'Poori',
    secondImageUrl: 'assets/Poori.avif'
  }
];


  scrollLeft(element: HTMLElement) {
    element.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight(element: HTMLElement) {
    element.scrollBy({ left: 200, behavior: 'smooth' });
  }
}
