import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DepositChart } from '../../layout/deposit-chart/deposit-chart';

@Component({
  selector: 'admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, DepositChart],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class AdminDashboard {
  stats = [
    {
      label: 'Total Users',
      value: 1240,
      icon: '👥',
      color: 'bg-cyan-500',
      route: '/admin/users',
    },
    {
      label: 'KYC Pending',
      value: 32,
      icon: '🛂',
      color: 'bg-yellow-500',
      route: '/admin/kyc',
    },
    {
      label: 'Credit/Loan Requests',
      value: 18,
      icon: '💳',
      color: 'bg-purple-500',
      route: '/admin/credit',
    },
    {
      label: 'Total Deposit Volume',
      value: '2.4M USDT',
      icon: '💰',
      color: 'bg-green-500',
      route: '/admin/transactions',
    },
  ];

  activities = [
    {
      user: 'Nguyen Van A',
      action: 'Submitted KYC',
      time: '5 mins ago',
    },
    {
      user: 'John Doe',
      action: 'Requested Credit',
      time: '20 mins ago',
    },
    {
      user: 'Admin',
      action: 'Approved Loan',
      time: '1 hour ago',
    },
     {
      user: 'Nguyen Van A',
      action: 'Requested Withdrawal ',
      time: '5 mins ago',
    },
    {
      user: 'John Doe',
      action: 'Requested Credit',
      time: '20 mins ago',
    },
    {
      user: 'Admin',
      action: 'Approved Loan',
      time: '1 hour ago',
    },
     {
      user: 'Nguyen Van A',
      action: 'Submitted KYC',
      time: '5 mins ago',
    },
    {
      user: 'John Doe',
      action: 'Requested Credit',
      time: '20 mins ago',
    },
    {
      user: 'Admin',
      action: 'Approved Loan',
      time: '1 hour ago',
    },
  ];
}

