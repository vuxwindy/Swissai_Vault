import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../../layout/header/header";
import { Sidebar } from '../../layout/sidebar/sidebar';


@Component({
  selector: 'app-home',
  imports: [Header, Sidebar, RouterOutlet],
  templateUrl: './app-home.html',
  styleUrl: './app-home.css',
})
export class AppHome {
  visible = true;
 collapsed = false;
 
  close() {
    this.visible = false;
  }
   toggleCollapse() {
    this.collapsed = !this.collapsed;
  }
}
