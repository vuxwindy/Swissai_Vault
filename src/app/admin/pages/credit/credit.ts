
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { CreditRequest } from '../credit.model';
export type CreditStatus = 'pending' | 'approved' | 'rejected';

export interface CreditRequest {
  id: number;
  fullName: string;
  email: string;
  country: string;
  custodyValue: string;
  amount: number;
  term: string;
  purpose?: string;
  risk?: 'low' | 'medium' | 'high';
  status: CreditStatus;
  createdAt: string;
}

@Component({
  selector: 'admin-credit',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './credit.html',
  styleUrl: './credit.css',
})
export class Credit {
  credits: CreditRequest[] = [
    {
      id: 1,
      fullName: 'Nguyen Van A',
      email: 'a@swissai.io',
      country: 'Vietnam',
      custodyValue: '5,000 USDT',
      amount: 2000,
      term: '6 months',
      risk: 'medium',
      status: 'pending',
      createdAt: '2026-01-10',
    },
     {
      id: 2,
      fullName: 'Jon Doe',
      email: 'a@swissai.io',
      country: 'Vietnam',
      custodyValue: '5,000 USDT',
      amount: 2000,
      term: '1 month',
      risk: 'high',
      status: 'pending',
      createdAt: '2026-01-10',
    },
  ];

  approve(c: CreditRequest) {
    c.status = 'approved';
  }

  reject(c: CreditRequest) {
    c.status = 'rejected';
  }
}

