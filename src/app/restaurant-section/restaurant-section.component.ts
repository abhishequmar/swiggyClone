import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';

@Component({
  selector: 'app-restaurant-section',
  standalone: true,
  imports: [RestaurantCardComponent, CommonModule],
  templateUrl: './restaurant-section.component.html',
  styleUrl: './restaurant-section.component.css'
})
export class RestaurantSectionComponent {
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


  scrollLeft(element: HTMLElement) {
    element.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight(element: HTMLElement) {
    element.scrollBy({ left: 200, behavior: 'smooth' });
  }

}
