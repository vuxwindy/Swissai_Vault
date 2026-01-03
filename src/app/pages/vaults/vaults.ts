import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
 

@Component({
  selector: 'vaults', 
  imports: [CommonModule],
  templateUrl: './vaults.html',
  styleUrl: './vaults.css',
})

export class Vaults {
  selectedFile: File | null = null;
  submitting = false;
  success = false;
  error = '';

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];

    // validate size < 10MB
    if (file.size > 10 * 1024 * 1024) {
      this.error = 'File size must be less than 10MB';
      this.selectedFile = null;
      return;
    }

    this.error = '';
    this.selectedFile = file;
  }

  submitKyc() {
    if (!this.selectedFile) return;

    this.submitting = true;
    this.error = '';

    // 🔹 MOCK API CALL
    setTimeout(() => {
      this.submitting = false;
      this.success = true;
      this.selectedFile = null;
    }, 1500);
  }

}
