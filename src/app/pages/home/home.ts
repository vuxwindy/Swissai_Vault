import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Header } from '../../components/header/header';
import {Footer} from '../../components/footer/footer';
@Component({
  selector: 'home',
  imports: [Hero, Header, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
