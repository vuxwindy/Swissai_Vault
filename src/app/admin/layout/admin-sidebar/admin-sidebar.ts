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
    { label: 'Dashboard', icon: '📊', route: '/admin/dashboard' },
    { label: 'Users', icon: '👤', route: '/admin/users' },
    { label: 'KYC', icon: '🛂', route: '/admin/kyc' },
    { label: 'Transactions', icon: '💎', route: '/admin/transactions' },
    { label: 'Credit', icon: '💳', route: '/admin/credit' },
    { label: 'Settings', icon: '⚙️', route: '/admin/settings' },

  ];
  constructor(public layout: LayoutService) {}
}
