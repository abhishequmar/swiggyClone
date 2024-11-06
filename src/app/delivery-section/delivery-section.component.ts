import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DeliveryCardComponent } from '../delivery-card/delivery-card.component';

@Component({
  selector: 'app-delivery-section',
  standalone: true,
  imports: [CommonModule, DeliveryCardComponent],
  templateUrl: './delivery-section.component.html',
  styleUrl: './delivery-section.component.css'
})
export class DeliverySectionComponent {

  foodCities = [
    "Order food online in Bangalore",
    "Order food online in Gurgaon",
    "Order food online in Hyderabad",
    "Order food online in Delhi",
    "Order food online in Mumbai",
    "Order food online in Pune",
    "Order food online in Kolkata",
    "Order food online in Chennai",
    "Order food online in Ahmedabad",
    "Order food online in Chandigarh",
    "Order food online in Jaipur"
  ];
  
  // Cities with grocery delivery
  groceryCities = [
    "Order grocery delivery in Bangalore",
    "Order grocery delivery in Gurgaon",
    "Order grocery delivery in Hyderabad",
    "Order grocery delivery in Delhi",
    "Order grocery delivery in Mumbai",
    "Order grocery delivery in Pune",
    "Order grocery delivery in Kolkata",
    "Order grocery delivery in Chennai",
    "Order grocery delivery in Ahmedabad",
    "Order grocery delivery in Chandigarh",
    "Order grocery delivery in Jaipur"
  ];
  // Control showing more cities for each section
  showMoreFood = false;
  showMoreGrocery = false;

  toggleShowMore(section: 'food' | 'grocery') {
    if (section === 'food') {
      this.showMoreFood = !this.showMoreFood;
    } else {
      this.showMoreGrocery = !this.showMoreGrocery;
    }
  }
  
  @Input() title!: string;
  @Input() cities: string[] = [];
  @Input() showMore = false;
}
