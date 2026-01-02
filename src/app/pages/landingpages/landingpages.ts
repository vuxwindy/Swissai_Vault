import { Component } from '@angular/core';
import { Exchanges } from '../../components/exchanges/exchanges';
import { Pricing } from '../../components/pricing/pricing';


@Component({
  selector: 'landingpages',
  imports: [Exchanges, Pricing],
  templateUrl: './landingpages.html',
  styleUrl: './landingpages.css',
})
export class Landingpages {

}
