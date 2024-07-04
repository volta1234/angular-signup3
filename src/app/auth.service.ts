// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  signup(email: string, password: string) {
    // Implement signup logic
    console.log('User signed up:', email);
  }

  login(email: string, password: string) {
    // Implement login logic
    console.log('User logged in:', email);
  }

  resetPassword(email: string) {
    // Implement reset password logic
    console.log('Password reset for:', email);
  }
}
