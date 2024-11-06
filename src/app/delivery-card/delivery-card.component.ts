import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-delivery-card',
  standalone: true,
  imports: [],
  templateUrl: './delivery-card.component.html',
  styleUrl: './delivery-card.component.css'
})
export class DeliveryCardComponent {
  @Input() title!: string;
}
