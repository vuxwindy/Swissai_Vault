import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'loan',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './loan.html',
  styleUrl: './loan.css',
})
export class Loan {
open = false;
  success = false;
  loading = false;
  form;
constructor(private fb: FormBuilder) {
  this.form = this.fb.group({
    fullName: ['', Validators.required],
    email: [{ value: 'user@example.com', disabled: true }],
    country: ['', Validators.required],
    custodyValue: [{ value: '5,000 USDT', disabled: true }],
    amount: ['', [Validators.required, Validators.min(1)]],
    term: ['', Validators.required],
    purpose: [''],
    risk: [''],
    consent: [false, Validators.requiredTrue],
  });
}
  

  openModal() {
    this.open = true;
  }

  closeModal() {
    this.open = false;
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.open = false;
      this.success = true;
    }, 1200);
  }
}
