import {Component, Input} from '@angular/core';
import {NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'shared-lazy-image',
  standalone: true,
  imports: [
    NgIf,
    NgStyle
  ],
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent {

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit() {
    if (!this.url) {
      throw new Error('Attribute url is required');
    }
  }

  onLoaded() {
    console.log('image loaded!');
    this.hasLoaded = true;
  }
}
