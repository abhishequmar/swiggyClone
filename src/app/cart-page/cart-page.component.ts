import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit {
  items: CartItem[] = [];
  isModalOpen: boolean = false;

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    const cartItems = localStorage.getItem('cart');
    if (cartItems) {
      this.items = JSON.parse(cartItems);
    }
  }

  removeItem(item: CartItem) {
    this.items = this.items.filter(i => i !== item);
    this.updateCart();
  }

  updateCart() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  // Quantity Update Functions
  increaseQuantity(item: CartItem) {
    item.quantity++;
    this.updateCart();
  }

  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateCart();
    }
  }

  // Modal functionality
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  confirmOrder() {
    // Logic to handle order placement (e.g., save order to a server)
    this.clearCart();
    this.closeModal();
    alert('Your order has been placed!');
  }

  clearCart() {
    this.items = [];
    localStorage.removeItem('cart');
  }

totalPriceBeforeGST() {
    let total = 0;
    for (const item of this.items) {
      total += item.price * item.quantity;
    }
    return total;
  }

  gstAmount() {
    const total = this.totalPriceBeforeGST();
    return +(total * 0.18).toFixed(2);
  }

  totalPriceAfterGST() {
    const total = this.totalPriceBeforeGST();
    const gst = this.gstAmount();
    return +(total + gst).toFixed(2);
  }

}