import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-food-item',
  standalone: true,
  imports: [],
  templateUrl: './food-item.component.html',
  styleUrl: './food-item.component.css'
})
export class FoodItemComponent {
    @Input() firstImageUrl!: string;
  @Input() firstName!: string;
  @Input() secondImageUrl!: string;
  @Input() secondName!: string;
}
