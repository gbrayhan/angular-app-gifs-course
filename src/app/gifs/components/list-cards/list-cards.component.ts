import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {CardImageComponent} from "../card-image/card-image.component";
import {DataGif} from "../../interfaces/http/giphy";
import {GifsService} from "../../services/gifs.service";

@Component({
  selector: 'app-list-cards',
  standalone: true,
  imports: [
    NgForOf,
    CardImageComponent
  ],
  templateUrl: './list-cards.component.html',
  styleUrl: './list-cards.component.css'
})
export class ListCardsComponent {

  constructor() {
  }

  @Input()
  gifList: Array<DataGif> = [];


}
