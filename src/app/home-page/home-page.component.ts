import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CategoriesSectionComponent } from '../categories-section/categories-section.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { FoodOptionsComponent } from '../food-options/food-options.component';
import { GrocerySectionComponent } from '../grocery-section/grocery-section.component';
import { RestaurantSectionComponent } from '../restaurant-section/restaurant-section.component';
import { DeliverySectionComponent } from '../delivery-section/delivery-section.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent,
            CategoriesSectionComponent,
            HeroSectionComponent,
            FoodOptionsComponent,
            GrocerySectionComponent,
            RestaurantSectionComponent,
            DeliverySectionComponent,
            FooterComponent,
            HttpClientModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
