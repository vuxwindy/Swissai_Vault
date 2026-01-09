import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../layout/layout.service';

@Component({
  selector: 'admin-header',
  imports: [CommonModule],
  templateUrl: './admin-header.html',
  styleUrl: './admin-header.css',
})
export class AdminHeader {
constructor(public layout: LayoutService) {}
}
