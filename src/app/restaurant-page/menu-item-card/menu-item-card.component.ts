import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-item-card.component.html',
  styleUrl: './menu-item-card.component.css'
})
export class MenuItemCardComponent {
    @Input() name!: string;
  @Input() price!: number;
  @Input() rating!: number;
  @Input() reviews!: number;
  @Input() description!: string;
  @Input() imageUrl!: string;
  @Input() isBestseller: boolean = false;

    addToCart(): void {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    cartItems.push({
      name: this.name,
      price: this.price,
      rating: this.rating,
      reviews: this.reviews,
      description: this.description,
      imageUrl: this.imageUrl,
      quantity: 1
    });
    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert('Item added to cart!');
  }

  addToFavourites(): void {
    const favouriteItems = JSON.parse(localStorage.getItem('favourites') || '[]');
    favouriteItems.push({
      name: this.name,
      price: this.price,
      rating: this.rating,
      reviews: this.reviews,
      description: this.description,
      imageUrl: this.imageUrl,
      quantity: 1,
    });
    localStorage.setItem('favourites', JSON.stringify(favouriteItems));
    alert('Item added to favourites!');
  }

}
