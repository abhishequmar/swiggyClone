import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-food-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './food-item.component.html',
  styleUrl: './food-item.component.css'
})
export class FoodItemComponent {
  @Input() firstId!: string;
  @Input() secondId!: string;
    @Input() firstImageUrl!: string;
  @Input() secondImageUrl!: string;
}
