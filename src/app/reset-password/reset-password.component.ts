// reset-password.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  constructor(private authService: AuthService) {}

  resetPassword(email: string) {
    this.authService.resetPassword(email);
  }
}
