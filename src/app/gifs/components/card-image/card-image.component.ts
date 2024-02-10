import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Gif} from "../../interfaces/gifs";
import {DataGif} from "../../interfaces/http/giphy";

@Component({
  selector: 'app-card-image',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './card-image.component.html',
  styleUrl: './card-image.component.css'
})
export class CardImageComponent {

  @Input()
  public dataGif!: DataGif;

}
