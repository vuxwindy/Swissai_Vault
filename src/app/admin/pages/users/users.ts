 
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  level: string;
  status: 'active' | 'blocked';
  createdAt: string;
}

@Component({
  selector: 'admin-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  users: User[] = [
    {
      id: 1,
      name: 'Nguyen Van A',
      email: 'a@swissai.io',
      role: 'Admin',
      level: 'lv1',
      status: 'active',
      createdAt: '2025-01-10',
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'john@swissai.io',
      role: 'User',
      level: "lv2",
      status: 'blocked',
      createdAt: '2025-01-12',
    },
     {
      id: 3,
      name: 'Nguyen Van A',
      email: 'a@swissai.io',
      role: 'Admin',
      level: 'lv1',
      status: 'active',
      createdAt: '2025-01-10',
    },
    
  ];

  deleteUser(user: User) {
    if (confirm(`Delete user ${user.name}?`)) {
      this.users = this.users.filter(u => u.id !== user.id);
    }
  }
}
