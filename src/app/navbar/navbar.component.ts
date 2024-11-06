import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    isModalOpen = false;

    toggleSigninModel(): void {
    console.log(" button clicked");
    this.isModalOpen = !this.isModalOpen;
    console.log(this.isModalOpen);
  }

      @Input() isSignUp: boolean = false;

  toggleAuthForm() {
    this.isSignUp = !this.isSignUp;
  }
}
