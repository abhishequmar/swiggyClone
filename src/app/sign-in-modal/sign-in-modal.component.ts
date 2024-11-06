import { Component,EventEmitter, Output } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule



@Component({
  selector: 'app-sign-in-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-in-modal.component.html',
  styleUrl: './sign-in-modal.component.css'
})
export class SignInModalComponent {
    @Output() closeModal = new EventEmitter<void>();
  user: User = { username: '', password: '' };

  constructor(private authService: AuthService) {}

  onSignIn() {
    this.authService.signIn(this.user).subscribe({
      next: (response) => {
        console.log('Sign in successful', response);
        this.closeModal.emit();  // Close modal on successful sign in
      },
      error: (error) => console.error('Sign in failed', error)
    });
  }
}
