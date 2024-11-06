import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-item-card',
  standalone: true,
  imports: [],
  templateUrl: './menu-item-card.component.html',
  styleUrl: './menu-item-card.component.css'
})
export class MenuItemCardComponent {
    @Input() menuItem: any;
  @Output() addToFavorites = new EventEmitter<void>();
  @Output() addToCart = new EventEmitter<void>();

  onFavorite() {
    this.addToFavorites.emit();
  }

  onCart() {
    this.addToCart.emit();
  }
}
