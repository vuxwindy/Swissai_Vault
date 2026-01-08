import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exchanges } from '../../components/exchanges/exchanges';
import { Pricing } from '../../components/pricing/pricing';
import { Footer } from '../../layout/footer/footer';


@Component({
  selector: 'landingpages',
  imports: [CommonModule, Exchanges, Pricing, Footer],
  templateUrl: './landingpages.html',
  styleUrl: './landingpages.css',
})
export class Landingpages {
 mobileOpen = false;

  toggleMenu() {
    this.mobileOpen = !this.mobileOpen;
  }

  closeMenu() {
    this.mobileOpen = false;
  }
}
