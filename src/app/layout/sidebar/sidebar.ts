import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
    collapsed = false;
    mobileOpen = false;

    menu = [
    { label: 'Dashboard', icon: '📊', route: '/dashboard' },
    { label: 'Vaults', icon: '👛', route: '/vaults' },
    { label: 'Proposals', icon: '💎', route: '/proposals' },
    { label: 'Loan', icon: '💳', route: '/loan' },
    { label: 'Reports', icon: '💬', route: '/reports' },
    { label: 'Settings', icon: '⚙️', route: '/settings' },
    { label: 'Help', icon: '💬', route: '/help' }
  ];

   toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
  }

  closeMobile() {
    this.mobileOpen = false;
  }
}
