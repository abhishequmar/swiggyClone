import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItemCardComponent } from './menu-item-card/menu-item-card.component';

@Component({
  selector: 'app-restaurant-page',
  standalone: true,
  imports: [CommonModule, MenuItemCardComponent],
  templateUrl: './restaurant-page.component.html',
  styleUrl: './restaurant-page.component.css'
})
export class RestaurantPageComponent {
    restaurant: any; // Declare restaurant property here

    restaurantId: string | null = null;
    menuItems: any[] = [];





  restaurantList = [
    {
    name: "Ce La Vie Kitchen & Bar",
    cuisine: "Asian • Continental",
    location: "Connaught Place, Delhi",
    priceForTwo: "₹2300 for two",
    distance: "4.5 km",
    rating: 4.2,
    discountText: "Flat 35% off on pre-booking",
    bankOfferText: "Up to 15% off with bank offers",
    additionalOffersCount: 3,
    imageUrl: "assets/restaurants/ce_la_vie.jpg",
    restaurantId: "0"
  },
  {
    name: "The Embassy",
    cuisine: "European • North Indian",
    location: "Connaught Place, Delhi",
    priceForTwo: "₹1800 for two",
    distance: "3.8 km",
    rating: 4.1,
    discountText: "Flat 15% off on walk-in",
    bankOfferText: "Up to 15% off with bank offers",
    additionalOffersCount: 1,
    imageUrl: "assets/restaurants/the_embassy.jpg",
    restaurantId: "1"
  },
  {
    name: "My Bar Square",
    cuisine: "Finger Food • North Indian",
    location: "Connaught Place, Delhi",
    priceForTwo: "₹2000 for two",
    distance: "4.2 km",
    rating: 4.0,
    discountText: "Flat 15% off on pre-booking",
    bankOfferText: "Up to 15% off with bank offers",
    additionalOffersCount: 2,
    imageUrl: "assets/restaurants/my_bar_square.jpg",
    restaurantId: "2",
  },
  {
    name: "DR Zombie",
    cuisine: "Italian • North Indian",
    location: "Connaught Place, Delhi",
    priceForTwo: "₹2400 for two",
    distance: "4 km",
    rating: 4.5,
    discountText: "Flat 25% off on walk-in",
    bankOfferText: "Up to 15% off with bank offers",
    additionalOffersCount: 1,
    imageUrl: "assets/restaurants/dr_zombie.jpg",
    restaurantId: "3"
  },
  {
    name: "The Host",
    cuisine: "Mughlai • Seafood",
    location: "F-Block, Connaught Place, Delhi",
    priceForTwo: "₹1800 for two",
    distance: "4 km",
    rating: 3.9,
    discountText: "Flat 15% off on walk-in",
    bankOfferText: "Up to 15% off with bank offers",
    additionalOffersCount: 1,
    imageUrl: "assets/restaurants/the_host.jpg",
    restaurantId: "4"
  },
  {
    name: "Zaffran",
    cuisine: "Mughlai • North Indian",
    location: "Hotel Palace Heights, Connaught Place, Delhi",
    priceForTwo: "₹3200 for two",
    distance: "3.7 km",
    rating: 4.4,
    discountText: "Flat 15% off on walk-in",
    bankOfferText: "Up to 15% off with bank offers",
    additionalOffersCount: 1,
    imageUrl: "assets/restaurants/zaffran.jpg",
    restaurantId: "5"
  },
  {
    name: "Dhaba Estd 1986 Delhi",
    cuisine: "Mughlai • North Indian",
    location: "Connaught Place, Delhi",
    priceForTwo: "₹1600 for two",
    distance: "4 km",
    rating: 3.8,
    discountText: "Flat 30% off on pre-booking",
    bankOfferText: "Up to 15% off with bank offers",
    additionalOffersCount: 6,
    imageUrl: "assets/restaurants/dhaba.jpg",
    restaurantId: "6"
  },
  {
    name: "Cafe Hawkers",
    cuisine: "Continental • North Indian",
    location: "Connaught Place, Delhi",
    priceForTwo: "₹800 for two",
    distance: "3.8 km",
    rating: 4.4,
    discountText: "Flat 30% off on pre-booking",
    bankOfferText: "Up to 15% off with bank offers",
    additionalOffersCount: 2,
    imageUrl: "assets/restaurants/cafe_hawkers.jpg",
    restaurantId: "7"
  },
  
];

menuList = [
  // Menu for restaurantId '0'
  {
    restaurantId: '0',
    items: [
      { name: "Pasta Primavera", description: "Fresh pasta with seasonal vegetables", price: "₹350", imageUrl: "assets/pasta_primavera.jpg" },
      { name: "Margherita Pizza", description: "Classic pizza with tomato and mozzarella", price: "₹500", imageUrl: "assets/margherita_pizza.jfif" },
      { name: "Caesar Salad", description: "Romaine lettuce, croutons, and Parmesan cheese", price: "₹250", imageUrl: "assets/caesar_salad.jfif" }
    ]
  },
  // Menu for restaurantId '1'
  {
    restaurantId: '1',
    items: [
      { name: "Grilled Salmon", description: "Salmon with a lemon butter sauce", price: 750, imageUrl: "assets/grilled_salmon.jfif" },
      { name: "Lamb Chops", description: "Herb-crusted lamb chops with mashed potatoes", price: 900, imageUrl: "assets/lamb_chops.jfif" },
      { name: "Greek Salad", description: "Fresh vegetables, olives, and feta cheese", price: 300, imageUrl: "assets/greek_salad.jfif" }
    ]
  },
  // Menu for restaurantId '2'
  {
    restaurantId: '2',
    items: [
      { name: "Butter Chicken", description: "Classic butter chicken with naan", price:400, imageUrl: "assets/butter_chicken.jfif" },
      { name: "Paneer Tikka", description: "Grilled paneer with spices", price:350, imageUrl: "assets/paneer_tikka.jfif" },
      { name: "Gulab Jamun", description: "Sweet Indian dessert", price:100, imageUrl: "assets/gulab_jamun.jfif" }
    ]
  },
  // Menu for restaurantId '3'
  {
    restaurantId: '3',
    items: [
      { name: "Sushi Platter", description: "Assortment of fresh sushi", price:1200, imageUrl: "assets/sushi_platter.jfif" },
      { name: "Tempura", description: "Crispy fried vegetables and shrimp", price: 600, imageUrl: "assets/tempura.jfif" },
      { name: "Miso Soup", description: "Traditional Japanese soup", price: 150, imageUrl: "assets/miso_soup.jfif" }
    ]
  },
  // Menu for restaurantId '4'
  {
    restaurantId: '4',
    items: [
      { name: "Biryani", description: "Spicy rice dish with chicken or mutton", price: 400, imageUrl: "assets/biryani.jfif" },
      { name: "Tandoori Chicken", description: "Charcoal-grilled marinated chicken", price: 500, imageUrl: "assets/tandoori_chicken.jfif" },
      { name: "Mango Lassi", description: "Refreshing yogurt drink with mango", price: 120, imageUrl: "assets/mango_lassi.jfif" }
    ]
  },
  // Menu for restaurantId '0'
  {
    restaurantId: '5',
    items: [
      { name: "Pasta Primavera", description: "Fresh pasta with seasonal vegetables", price: "₹350", imageUrl: "assets/pasta_primavera.jpg" },
      { name: "Margherita Pizza", description: "Classic pizza with tomato and mozzarella", price: "₹500", imageUrl: "assets/margherita_pizza.jfif" },
      { name: "Caesar Salad", description: "Romaine lettuce, croutons, and Parmesan cheese", price: "₹250", imageUrl: "assets/caesar_salad.jfif" }
    ]
  },
  // Menu for restaurantId '1'
  {
    restaurantId: '6',
    items: [
      { name: "Grilled Salmon", description: "Salmon with a lemon butter sauce", price: 750, imageUrl: "assets/grilled_salmon.jfif" },
      { name: "Lamb Chops", description: "Herb-crusted lamb chops with mashed potatoes", price: 900, imageUrl: "assets/lamb_chops.jfif" },
      { name: "Greek Salad", description: "Fresh vegetables, olives, and feta cheese", price: 300, imageUrl: "assets/greek_salad.jfif" }
    ]
  },
  // Menu for restaurantId '2'
  {
    restaurantId: '7',
    items: [
      { name: "Butter Chicken", description: "Classic butter chicken with naan", price:400, imageUrl: "assets/butter_chicken.jfif" },
      { name: "Paneer Tikka", description: "Grilled paneer with spices", price:350, imageUrl: "assets/paneer_tikka.jfif" },
      { name: "Gulab Jamun", description: "Sweet Indian dessert", price:100, imageUrl: "assets/gulab_jamun.jfif" }
    ]
  },
  // Menu for restaurantId '3'
  {
    restaurantId: '8',
    items: [
      { name: "Sushi Platter", description: "Assortment of fresh sushi", price:1200, imageUrl: "assets/sushi_platter.jfif" },
      { name: "Tempura", description: "Crispy fried vegetables and shrimp", price: 600, imageUrl: "assets/tempura.jfif" },
      { name: "Miso Soup", description: "Traditional Japanese soup", price: 150, imageUrl: "assets/miso_soup.jfif" }
    ]
  },
];


onAddToFavorites(menuItem: any) {
  console.log("Added to favorites:", menuItem.name);
}

onAddToCart(menuItem: any) {
  console.log("Added to cart:", menuItem.name);
}


    constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const restaurantId = params['restaurantId'];
      this.restaurant = this.restaurantList.find(
        restaurant => restaurant.restaurantId === restaurantId
      );
    });

    this.route.params.subscribe(params => {
      this.restaurantId = params['restaurantId'];
      const menu = this.menuList.find(menu => menu.restaurantId === this.restaurantId);
      this.menuItems = menu ? menu.items : [];
    });
  }

 


}
