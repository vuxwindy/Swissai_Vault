import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'signin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export class Signin {

  isSignup = false;

  signInForm!: FormGroup;
  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder) {

    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });

  }

  switchMode() {
    this.isSignup = !this.isSignup;
  }

  submitSignIn() {
    if (this.signInForm.invalid) return;
    console.log(this.signInForm.value);
  }

  submitSignUp() {
    if (this.signUpForm.invalid) return;
    console.log(this.signUpForm.value);
  }
}
