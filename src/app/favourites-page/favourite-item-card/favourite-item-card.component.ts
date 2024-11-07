import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favourite-item-card',
  standalone: true,
  imports: [],
  templateUrl: './favourite-item-card.component.html',
  styleUrl: './favourite-item-card.component.css'
})
export class FavouriteItemCardComponent {

 @Input() name!: string;
  @Input() price!: number;
  @Input() reviews!: number;
  @Input() description!: string;
  @Input() imageUrl!: string;

  // Event emitters if you want to communicate changes to the parent component
  @Output() itemAddedToCart = new EventEmitter<void>();
  @Output() itemRemovedFromFavourites = new EventEmitter<void>();

  // Add item to cart method
  moveToCart(): void {
    // Here, you would typically add logic to add the item to a cart service or state
    console.log(`${this.name} added to cart`);
    
    // Emit the event if necessary
    this.itemAddedToCart.emit();
  }



  // Remove item from favourites method
  removeFromFavourites(): void {
    // Here, you would typically add logic to remove the item from a favourites service or state
    console.log(`${this.name} removed from favourites`);
    
    // Emit the event if necessary
    this.itemRemovedFromFavourites.emit();
  }
}