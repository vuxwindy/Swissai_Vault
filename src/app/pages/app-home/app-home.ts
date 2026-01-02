import { Component } from '@angular/core';
import { Header } from "../../layout/header/header";
import { Sidebar } from '../../layout/sidebar/sidebar';


@Component({
  selector: 'app-home',
  imports: [Header, Sidebar],
  templateUrl: './app-home.html',
  styleUrl: './app-home.css',
})
export class AppHome {
  visible = true;

  close() {
    this.visible = false;
  }
}
