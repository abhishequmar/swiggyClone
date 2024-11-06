import { Component, Inject } from '@angular/core';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { CategoriesSectionComponent } from './categories-section/categories-section.component';
import { FoodOptionsComponent } from './food-options/food-options.component';
import { GrocerySectionComponent } from './grocery-section/grocery-section.component';
import { RestaurantSectionComponent } from './restaurant-section/restaurant-section.component';
import { DeliverySectionComponent } from './delivery-section/delivery-section.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SignInModalComponent } from './sign-in-modal/sign-in-modal.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            RouterModule,
            NavbarComponent, 
            HeroSectionComponent, 
            CategoriesSectionComponent, 
            FoodOptionsComponent,
            GrocerySectionComponent,
            RestaurantSectionComponent,
            DeliverySectionComponent,
            FooterComponent,
            SignInModalComponent,
            RestaurantPageComponent,
            HttpClientModule,
            CommonModule,
            HomePageComponent,
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'swiggyClone';

    // Track the state of the modal
  isSignInModalOpen: boolean = false;

  // Method to open the modal
  openSignInModal() {
    this.isSignInModalOpen = true;
    console.log(this.isSignInModalOpen);
  }

  // Method to close the modal
  closeSignInModal() {
    this.isSignInModalOpen = false;
    console.log(this.isSignInModalOpen);
  }
}
