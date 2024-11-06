import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule


@Component({
  selector: 'app-restaurant-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.css'
})
export class RestaurantCardComponent {
    @Input() imageUrl!: string;
  @Input() name!: string;
  @Input() cuisine!: string;
  @Input() location!: string;
  @Input() priceForTwo!: string;
  @Input() distance!: string;
  @Input() rating!: number;
  @Input() discountText!: string;
  @Input() bankOfferText!: string;
  @Input() additionalOffersCount!: number;
  @Input() restaurantId!: string;

}
