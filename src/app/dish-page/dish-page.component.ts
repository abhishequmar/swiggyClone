import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';



interface Restaurant {
  name: string;
  rating: number;
  deliveryTime: string;
  offer: string;
  tags: string[];
  location: string;
  imageUrl: string;
  restaurantId: string; 
}

@Component({
  selector: 'app-dish-page',
  standalone: true,
  imports: [CommonModule, RouterModule, RestaurantCardComponent],
  templateUrl: './dish-page.component.html',
  styleUrl: './dish-page.component.css'
})
export class DishPageComponent {
    @Input() dishType: string='';
    restaurantId!: string | null;
  restaurants: Restaurant[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.dishType = params['dishType'];
      this.loadRestaurants(this.dishType);
    });
        this.restaurantId = this.route.snapshot.paramMap.get('id');

  }

   dishData = [
  {
    id: 'North_Indian',
    restaurantIds: [1, 2, 5] // Example restaurant IDs serving North Indian food
  },
  {
    id: 'Paratha',
    restaurantIds: [3, 6, 7] // Example restaurant IDs serving Paratha
  },
  {
    id: 'Pizza',
    restaurantIds: [2, 4, 8] // Example restaurant IDs serving Pizza
  },
  {
    id: 'South_Indian',
    restaurantIds: [1, 5, 9] // Example restaurant IDs serving South Indian food
  },
  {
    id: 'Biryani',
    restaurantIds: [3, 7, 10] // Example restaurant IDs serving Biryani
  },
  {
    id: 'Pav_Bhaji',
    restaurantIds: [4, 6, 8] // Example restaurant IDs serving Pav Bhaji
  },
  {
    id: 'Chole_Bhature',
    restaurantIds: [2, 5, 9] // Example restaurant IDs serving Chole Bhature
  },
  {
    id: 'Shake',
    restaurantIds: [1, 3, 10] // Example restaurant IDs serving Shake
  },
  {
    id: 'Chinese',
    restaurantIds: [4, 6, 7] // Example restaurant IDs serving Chinese food
  },
  {
    id: 'Pure_Veg',
    restaurantIds: [2, 9, 10] // Example restaurant IDs serving Pure Veg food
  },
  {
    id: 'Burger',
    restaurantIds: [5, 8, 10] // Example restaurant IDs serving Burger
  },
  {
    id: 'Noodles',
    restaurantIds: [1, 7, 8] // Example restaurant IDs serving Noodles
  },
  {
    id: 'Dosa',
    restaurantIds: [3, 4, 7] // Example restaurant IDs serving Dosa
  },
  {
    id: 'Salad',
    restaurantIds: [5, 6, 9] // Example restaurant IDs serving Salad
  },
  {
    id: 'Pasta',
    restaurantIds: [1, 6, 10] // Example restaurant IDs serving Pasta
  },
  {
    id: 'Rasmalai',
    restaurantIds: [2, 4, 9] // Example restaurant IDs serving Rasmalai
  },
  {
    id: 'Rolls',
    restaurantIds: [3, 5, 8] // Example restaurant IDs serving Rolls
  },
  {
    id: 'Pastry',
    restaurantIds: [6, 7, 9] // Example restaurant IDs serving Pastry
  },
  {
    id: 'Cake',
    restaurantIds: [2, 3, 10] // Example restaurant IDs serving Cake
  },
  {
    id: 'Poori',
    restaurantIds: [4, 5, 8] // Example restaurant IDs serving Poori
  }
];
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


loadRestaurants(dishType: string): void {
  // Find the dish object based on the dishType
  const dish = this.dishData.find(d => d.id === dishType);

  if (!dish) {
    console.log("Dish not found!");
    return;
  }

  // Extract restaurant IDs serving the dish
  const restaurantIds = dish.restaurantIds;

  // Filter the restaurantList to get restaurants that serve the given dish
  this.restaurants = this.restaurantList
    .filter(restaurant => restaurantIds.includes(Number(restaurant.restaurantId)))
    .map(restaurant => ({
      restaurantId: restaurant.restaurantId, // Ensure restaurantId is included
      imageUrl: restaurant.imageUrl,
      name: restaurant.name,
      rating: restaurant.rating,
      deliveryTime: "40-45 mins", // You can modify this based on available data
      tags: restaurant.cuisine.split(" • "), // Split cuisine into tags
      location: restaurant.location,
      offer: restaurant.discountText, // Add the 'offer' property here
    }));

  console.log(this.restaurants); // Display the filtered restaurants
}


}
