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
    { label: 'Dashboard', icon: '📊', route: '/app/dashboard' },
    { label: 'Vaults', icon: '👛', route: '/app/vaults' },
    { label: 'Proposals', icon: '💎', route: '/app/proposals' },
    { label: 'Loan', icon: '💳', route: '/app/loan' },
    { label: 'Reports', icon: '💬', route: '/app/reports' },
    { label: 'Settings', icon: '⚙️', route: '/app/settings' },
    { label: 'Help', icon: '💬', route: '/app/help' }
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
