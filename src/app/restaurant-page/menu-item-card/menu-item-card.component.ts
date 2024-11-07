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

}
