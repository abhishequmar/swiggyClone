import { RouterModule, Routes } from '@angular/router';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { DishPageComponent } from './dish-page/dish-page.component';

export const routes: Routes = [
    { path: 'restaurant/:restaurantId', component: RestaurantPageComponent},
    { path: '', component: HomePageComponent},
    { path: 'dish/:dishType', component: DishPageComponent },

    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

