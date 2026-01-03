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
    { label: 'Deposit/Withdraw', icon: '💎', route: '/app/proposals' },
    { label: 'Credit/Loan', icon: '💳', route: '/app/loan' },
    { label: 'Trust Pulse', icon: '', route: '/app/trustpulse' },
    { label: 'AI Strategy Monitor', icon: '💬', route: '/app/reports' },
    { label: 'KYC', icon: '👛', route: '/app/vaults' },
    { label: 'Settings', icon: '⚙️', route: '/app/settings' },
    { label: 'Log Out', icon: '💬', route: '/app/help' }
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
