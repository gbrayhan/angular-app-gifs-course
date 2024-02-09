import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Gif} from "../../interfaces/gifs";
import {CardImageComponent} from "../card-image/card-image.component";

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

  public cards: Array<Gif> = [
    {
      name: 'Gif title',
      description: 'Gif description',
      url: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/09/instagram-image-size.jpg'
    },
    {
      name: 'Gif title',
      description: 'Gif description',
      url: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/09/instagram-image-size.jpg'
    },
    {
      name: 'Gif title',
      description: 'Gif description',
      url: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/09/instagram-image-size.jpg'
    },
    {
      name: 'Gif title',
      description: 'Gif description',
      url: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/09/instagram-image-size.jpg'
    },
    {
      name: 'Gif title',
      description: 'Gif description',
      url: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/09/instagram-image-size.jpg'
    },
    {
      name: 'Gif title',
      description: 'Gif description',
      url: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/09/instagram-image-size.jpg'
    }
  ];

}
