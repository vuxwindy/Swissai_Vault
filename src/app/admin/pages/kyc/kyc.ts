 import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
 

type KycStatus = 'pending' | 'approved' | 'rejected';


interface KycRecord {
  id: number;
  user: string;
  email: string;
  documentType: string;
  documentImage: string;
  submittedAt: string;
  status: KycStatus;
}

@Component({
  selector: 'admin-kyc',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './kyc.html',
  styleUrl: './kyc.css',
})
export class Kyc {
  kycs: KycRecord[] = [
    {
      id: 1,
      user: 'Nguyen Van A',
      email: 'a@swissai.io',
      documentType: 'Passport',
      documentImage: 'hero1.png',
      submittedAt: '2025-01-15',
      status: 'pending',
    },
    {
      id: 2,
      user: 'John Doe',
      email: 'john@swissai.io',
      documentType: 'Passport',
      documentImage: 'hero1.png',
      submittedAt: '2025-01-14',
      status: 'approved',
    },
  ];

  approve(kyc: KycRecord) {
    kyc.status = 'approved';
  }

  reject(kyc: KycRecord) {
    kyc.status = 'rejected';
  }
 
previewImage: string | null = null;
openPreview(img: string) {
  this.previewImage = img;
}

closePreview() {
  this.previewImage = null;
}

}

