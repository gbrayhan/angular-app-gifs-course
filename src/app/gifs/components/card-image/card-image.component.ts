import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {DataGif} from "../../interfaces/http/giphy";
import {SharedModule} from "../../../shared/shared.module";

@Component({
  selector: 'app-card-image',
  standalone: true,
  imports: [
    NgOptimizedImage,
    SharedModule
  ],
  templateUrl: './card-image.component.html',
  styleUrl: './card-image.component.css'
})
export class CardImageComponent {

  @Input()
  public dataGif!: DataGif;

}
