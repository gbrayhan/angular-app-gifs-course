import { Component } from '@angular/core';
import {GifsService} from "../../../gifs/services/gifs.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private GifsService: GifsService) {
  }

  public get tagsHistory() {
    return this.GifsService.tagsHistory;
  }

}
