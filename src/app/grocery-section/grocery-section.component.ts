import { Component } from '@angular/core';
import { GroceryCardComponent } from '../grocery-card/grocery-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grocery-section',
  standalone: true,
  imports: [GroceryCardComponent, CommonModule],
  templateUrl: './grocery-section.component.html',
  styleUrl: './grocery-section.component.css'
})
export class GrocerySectionComponent {
  groceryItems = [
    {
      imageUrl: 'assets/groceries/vegetable.png'
    },
    {
      imageUrl: 'assets/groceries/fruit.png'
    },
    {
      imageUrl: 'assets/groceries/bread.png'
    },
    {
      imageUrl: 'assets/groceries/aata.png'
    },
    {
      imageUrl: 'assets/groceries/farmley.png'
    },
    {
      imageUrl: 'assets/groceries/oil.png'
    },
    {
      imageUrl: 'assets/groceries/lays.png'
    },
    {
      imageUrl: 'assets/groceries/chocolate.png'
    },
    {
      imageUrl: 'assets/groceries/cola.png'
    },
    {
      imageUrl: 'assets/groceries/oreo.png'
    },
    {
      imageUrl: 'assets/groceries/maggi.png'
    },
    {
      imageUrl: 'assets/groceries/whisper.png'
    },
    {
      imageUrl: 'assets/groceries/fish.png'
    },
    {
      imageUrl: 'assets/groceries/harpic.png'
    },
    {
      imageUrl: 'assets/groceries/shampoo.png'
    },
    {
      imageUrl: 'assets/groceries/kellogs.png'
    },
    {
      imageUrl: 'assets/groceries/nutella.png'
    },
    {
      imageUrl: 'assets/groceries/coffee.png'
    },
    {
      imageUrl: 'assets/groceries/nicotex.png'
    },
    {
      imageUrl: 'assets/groceries/origami.png'
    },
    {
      imageUrl: 'assets/groceries/hairdryer.png'
    },
    {
      imageUrl: 'assets/groceries/pampers.png'
    },
    {
      imageUrl: 'assets/groceries/vegetable.png'
    },
    {
      imageUrl: 'assets/groceries/razer.png'
    },
    {
      imageUrl: 'assets/groceries/bread.png'
    },
    
    
  ];

  scrollLeft(element: HTMLElement) {
    element.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight(element: HTMLElement) {
    element.scrollBy({ left: 200, behavior: 'smooth' });
  }
}
