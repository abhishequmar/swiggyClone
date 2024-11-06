import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grocery-card',
  standalone: true,
  imports: [],
  templateUrl: './grocery-card.component.html',
  styleUrl: './grocery-card.component.css'
})
export class GroceryCardComponent {
  @Input() imageUrl!: string;
}
