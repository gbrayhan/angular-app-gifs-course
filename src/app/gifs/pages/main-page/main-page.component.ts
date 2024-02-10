import { Component } from '@angular/core';
import {SearchBoxComponent} from "../../components/search-box/search-box.component";
import {ListCardsComponent} from "../../components/list-cards/list-cards.component";
import {GifsService} from "../../services/gifs.service";
import {DataGif} from "../../interfaces/http/giphy";

@Component({
  selector: 'gifs-pages-main',
  standalone: true,
  imports: [
    SearchBoxComponent,
    ListCardsComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor(private GifsService: GifsService) {
  }
  get gifListFromService() : DataGif[] {
    return this.GifsService.listGifs;
  }

}
