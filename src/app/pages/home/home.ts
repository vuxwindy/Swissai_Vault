import { Component } from '@angular/core';
// import { Hero } from '../../components/hero/hero';
// import { Features } from '../../components/features/features';
// import { Header } from '../../components/header/header';
import {Footer} from '../../components/footer/footer';
@Component({
  selector: 'home',
  imports: [ Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
