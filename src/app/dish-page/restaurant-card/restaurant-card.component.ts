import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule

@Component({
  selector: 'app-restaurant-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.css'
})
export class RestaurantCardComponent {
  @Input() restaurantId: string = '';
  @Input() imageUrl: string = '';
  @Input() name: string = '';
  @Input() rating: number = 0;
  @Input() deliveryTime: string = '';
  @Input() tags: string[] = [];
  @Input() location: string = '';
}
