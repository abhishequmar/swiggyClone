import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';  // Adjust the path if needed
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../auth.service';
import { RouterModule, Routes , Router} from '@angular/router';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
   constructor(private authService: AuthService, private router: Router) {}
    isModalOpen = false;
    isSignUp = false;
    email = '';
    password = '';
    confirmPassword = '';
    phoneNumber = '';
    name = '';
    address = '';
    cartItemCount: number = 0;

      loggedInUser: User | null = null; // Store logged-in user data
  isDropdownOpen = false;

   ngOnInit() {
    // Retrieve user data from localStorage (or from auth service)
    const userData = localStorage.getItem('userData');
    this.loggedInUser = userData ? JSON.parse(userData) : null;
    console.log(this.loggedInUser);
  }

    toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

    logout(): void {
    this.authService.logout(); // Ensure authService has a logout method to handle logout logic
    this.loggedInUser = null;
    localStorage.removeItem('userData'); // Clear user data from localStorage
  }




    toggleSigninModel(): void {
    console.log(" button clicked");
    this.isModalOpen = !this.isModalOpen;
    console.log(this.isModalOpen);
  }


loginError: string = '';  // Property to hold the error message

onSubmitLogin(): void {
  
  this.authService.login(this.email, this.password).subscribe({
  next: (user) => {
    if (user) {
      this.toggleSigninModel();
      console.log('Login successful', user);
      this.loginError = '';  // Clear any previous error messages

      // Navigate to the desired route
      this.router.navigate(['']).then(() => {
        // Refresh the page after successful navigation
        window.location.reload();
      });

    } else {
      this.loginError = 'Invalid username or password';
    }
  },
  error: () => {
    this.loginError = 'An error occurred during login. Please try again later.';
  },
});


  
}


      onSubmitSignup() {
    // Perform any necessary actions with the data

    console.log("signup button pressed");
    console.log('Phone Number:', this.phoneNumber);
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Address:', this.address);
    console.log('Password:', this.password);
    this.authService.signup(
      this.name,
      this.email,
      this.password,
      this.address,
    this.phoneNumber,

    
    
    
      
    
    
  ).subscribe(
    (user) => {
      // Step 3: Handle the successful signup response
      console.log('Signup successful:', user);
      this.isModalOpen = false;  // Close the modal on successful signup
    },
    (error) => {
      // Step 4: Handle errors
      console.error('Signup failed:', error);
    }
  );

  this.authService.login(this.email, this.password).subscribe({
    next: (user) => {
      if (user) {
        this.toggleSigninModel();
        console.log('Login successful', user);
        this.loginError = '';  // Clear any previous error messages
        this.router.navigate(['']);
        // this.router.navigate(['/home']);
      } else {
        this.loginError = 'Invalid username or password';
      }
    },
    error: () => {
      this.loginError = 'An error occurred during login. Please try again later.';
    },
  });
}

  toggleAuthForm() {
    this.isSignUp = !this.isSignUp;
  }
}
