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

  public get historyItems() {
    return this.GifsService.historyItems;
  }

  public onClickHistoryItem(tag: string): void {
    this.GifsService.selectHistoryItem(tag);
  }

}
