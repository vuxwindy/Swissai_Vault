import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Features } from "../../components/features/features";

@Component({
  selector: 'app-home',
  imports: [Header, Features],
  templateUrl: './app-home.html',
  styleUrl: './app-home.css',
})
export class AppHome {
  visible = true;

  close() {
    this.visible = false;
  }
}
