import { Component } from '@angular/core';
import { FavouriteItemCardComponent } from './favourite-item-card/favourite-item-card.component';
import { CommonModule } from '@angular/common';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

@Component({
  selector: 'app-favourites-page',
  standalone: true,
  imports: [FavouriteItemCardComponent, CommonModule],
  templateUrl: './favourites-page.component.html',
  styleUrl: './favourites-page.component.css'
})
export class FavouritesPageComponent {
  items: CartItem[] = [];
  isModalOpen: boolean = false;

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    const cartItems = localStorage.getItem('favourites');
    if (cartItems) {
      this.items = JSON.parse(cartItems);
    }
  }

  removeItem(item: CartItem) {
    this.items = this.items.filter(i => i !== item);
    this.updateCart();
  }

  updateCart() {
    localStorage.setItem('favourites', JSON.stringify(this.items));
  }

  increaseQuantity(item: CartItem) {
    this.addToCart(item);
  }


  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

      addToCart(item: CartItem): void {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    cartItems.push({
      name: item.name,
      price: item.price,
      imageUrl: item.imageUrl,
      quantity: 1
    });
    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert('Item added to cart!');
  }







}