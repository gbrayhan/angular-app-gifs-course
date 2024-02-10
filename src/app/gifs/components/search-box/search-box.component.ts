import {Component, ElementRef, ViewChild} from '@angular/core';
import {GifsService} from "../../services/gifs.service";

@Component({
  selector: 'gifs-component-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  constructor(private GifsService: GifsService) {
  }


  @ViewChild('tagSearchInput')
  searchInput!: ElementRef<HTMLInputElement>
  onSearch() {

    const value = this.searchInput.nativeElement.value;
    this.GifsService.searchTag(value);

    console.log(this.GifsService.historyItems);
    // clear input
    this.searchInput.nativeElement.value = '';
  }

}
