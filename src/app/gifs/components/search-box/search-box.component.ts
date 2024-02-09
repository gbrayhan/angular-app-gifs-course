import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'gifs-component-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {


  @ViewChild('tagSearchInput')
  searchInput!: ElementRef<HTMLInputElement>
  onSearch() {
    const value = this.searchInput.nativeElement.value;
    console.log('searching for:', value);
  }

}
