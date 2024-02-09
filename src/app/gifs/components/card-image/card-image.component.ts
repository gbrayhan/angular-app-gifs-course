import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Gif} from "../../interfaces/gifs";

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
  public cardImage: Gif = {
    name: '',
    description: '',
    url: ''
  }

}
