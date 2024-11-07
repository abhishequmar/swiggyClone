import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface MenuItem {
  restaurantId: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}


@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
  searchTerm: string = '';
  
 menuList: MenuItem[] = [
  { restaurantId: '0', name: "Pasta Primavera", description: "Fresh pasta with seasonal vegetables", price:350, imageUrl: "assets/pasta_primavera.jpg" },
  { restaurantId: '0', name: "Margherita Pizza", description: "Classic pizza with tomato and mozzarella", price: 500, imageUrl: "assets/margherita_pizza.jfif" },
  { restaurantId: '0', name: "Caesar Salad", description: "Romaine lettuce, croutons, and Parmesan cheese", price: 250, imageUrl: "assets/caesar_salad.jfif" },
  { restaurantId: '1', name: "Grilled Salmon", description: "Salmon with a lemon butter sauce", price: 750, imageUrl: "assets/grilled_salmon.jfif" },
  { restaurantId: '1', name: "Lamb Chops", description: "Herb-crusted lamb chops with mashed potatoes", price: 900, imageUrl: "assets/lamb_chops.jfif" },
  { restaurantId: '1', name: "Greek Salad", description: "Fresh vegetables, olives, and feta cheese", price: 300, imageUrl: "assets/greek_salad.jfif" },
  { restaurantId: '2', name: "Butter Chicken", description: "Classic butter chicken with naan", price: 400, imageUrl: "assets/butter_chicken.jfif" },
  { restaurantId: '2', name: "Paneer Tikka", description: "Grilled paneer with spices", price: 350, imageUrl: "assets/paneer_tikka.jfif" },
  { restaurantId: '2', name: "Gulab Jamun", description: "Sweet Indian dessert", price: 100, imageUrl: "assets/gulab_jamun.jfif" },
  { restaurantId: '3', name: "Sushi Platter", description: "Assortment of fresh sushi", price: 1200, imageUrl: "assets/sushi_platter.jfif" },
  { restaurantId: '3', name: "Tempura", description: "Crispy fried vegetables and shrimp", price: 600, imageUrl: "assets/tempura.jfif" },
  { restaurantId: '3', name: "Miso Soup", description: "Traditional Japanese soup", price: 150, imageUrl: "assets/miso_soup.jfif" },
  { restaurantId: '4', name: "Biryani", description: "Spicy rice dish with chicken or mutton", price: 400, imageUrl: "assets/biryani.jfif" },
  { restaurantId: '4', name: "Tandoori Chicken", description: "Charcoal-grilled marinated chicken", price: 500, imageUrl: "assets/tandoori_chicken.jfif" },
  { restaurantId: '4', name: "Mango Lassi", description: "Refreshing yogurt drink with mango", price: 120, imageUrl: "assets/mango_lassi.jfif" },
  { restaurantId: '5', name: "Pasta Primavera", description: "Fresh pasta with seasonal vegetables", price: 350, imageUrl: "assets/pasta_primavera.jpg" },
  { restaurantId: '5', name: "Margherita Pizza", description: "Classic pizza with tomato and mozzarella", price: 500, imageUrl: "assets/margherita_pizza.jfif" },
  { restaurantId: '5', name: "Caesar Salad", description: "Romaine lettuce, croutons, and Parmesan cheese", price: 250, imageUrl: "assets/caesar_salad.jfif" },
  { restaurantId: '6', name: "Grilled Salmon", description: "Salmon with a lemon butter sauce", price: 750, imageUrl: "assets/grilled_salmon.jfif" },
  { restaurantId: '6', name: "Lamb Chops", description: "Herb-crusted lamb chops with mashed potatoes", price: 900, imageUrl: "assets/lamb_chops.jfif" },
  { restaurantId: '6', name: "Greek Salad", description: "Fresh vegetables, olives, and feta cheese", price: 300, imageUrl: "assets/greek_salad.jfif" },
  { restaurantId: '7', name: "Butter Chicken", description: "Classic butter chicken with naan", price: 400, imageUrl: "assets/butter_chicken.jfif" },
  { restaurantId: '7', name: "Paneer Tikka", description: "Grilled paneer with spices", price: 350, imageUrl: "assets/paneer_tikka.jfif" },
  { restaurantId: '7', name: "Gulab Jamun", description: "Sweet Indian dessert", price: 100, imageUrl: "assets/gulab_jamun.jfif" },
  { restaurantId: '8', name: "Sushi Platter", description: "Assortment of fresh sushi", price: 1200, imageUrl: "assets/sushi_platter.jfif" },
  { restaurantId: '8', name: "Tempura", description: "Crispy fried vegetables and shrimp", price: 600, imageUrl: "assets/tempura.jfif" },
  { restaurantId: '8', name: "Miso Soup", description: "Traditional Japanese soup", price: 150, imageUrl: "assets/miso_soup.jfif" },
];



  filteredItems: MenuItem[] = [];

  constructor(private router: Router) {}

  onSearch() {
    if (this.searchTerm) {
      this.filteredItems = this.menuList.filter(item =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredItems = [];
    }
  }

  selectItem(item: MenuItem) {
    this.router.navigate(['/restaurant', item.restaurantId]);
  }
}