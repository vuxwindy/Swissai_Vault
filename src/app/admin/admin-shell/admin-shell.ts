import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AdminHeader } from '../../admin/layout/admin-header/admin-header';
import { AdminSidebar } from '../../admin/layout/admin-sidebar/admin-sidebar';
import { LayoutService } from '../../admin/layout/layout.service';

@Component({
  selector: 'admin',
  standalone: true,
  imports: [AdminSidebar, AdminHeader, RouterOutlet, CommonModule],
  templateUrl: './admin-shell.html',
  styleUrl: './admin-shell.css',
})
export class AdminShell implements OnInit{
  isDesktop = false;

  constructor(public layout: LayoutService) {}

  ngOnInit() {
    this.isDesktop = this.layout.isDesktop;
  }

}
