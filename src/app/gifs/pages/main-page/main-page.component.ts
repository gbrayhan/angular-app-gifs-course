import { Component } from '@angular/core';
import {SearchBoxComponent} from "../../components/search-box/search-box.component";

@Component({
  selector: 'gifs-pages-main',
  standalone: true,
  imports: [
    SearchBoxComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
