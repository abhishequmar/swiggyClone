import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item-card',
  standalone: true,
  imports: [],
  templateUrl: './cart-item-card.component.html',
  styleUrl: './cart-item-card.component.css'
})
export class CartItemCardComponent {

    @Input() name!: string;
  @Input() price!: number;
  @Input() quantity!: number;
  @Input() imageUrl!: string;

  @Output() remove = new EventEmitter<void>();
  @Output() increase = new EventEmitter<void>();
  @Output() decrease = new EventEmitter<void>();


}
