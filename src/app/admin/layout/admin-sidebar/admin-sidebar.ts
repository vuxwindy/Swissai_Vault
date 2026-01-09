import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../layout/layout.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'admin-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-sidebar.html',
  styleUrl: './admin-sidebar.css',
})
export class AdminSidebar {
 menu = [
    { label: 'Users', icon: '👤', route: '/admin/users' },
    { label: 'KYC', icon: '🛂', route: '/admin/kyc' },
    { label: 'Transactions', icon: '💳', route: '/admin/transactions' },
  ];
  constructor(public layout: LayoutService) {}
}
