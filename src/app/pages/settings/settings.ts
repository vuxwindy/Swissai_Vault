import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {
 selectedFile: File | null = null;
 avatarPreview: string | null = null;

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
    // Validate: chỉ cho ảnh
  if (!file.type.startsWith('image/')) {
    alert('Please select an image file');
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    this.avatarPreview = reader.result as string;
  };

  reader.readAsDataURL(file);

    this.error = '';
    this.selectedFile = file;
  }



}
