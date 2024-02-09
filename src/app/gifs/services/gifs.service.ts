import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string[] = [];

  constructor() {
  }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  public searchTag(tag: string): void {
    // add tag to history first
    console.log('executing service searchTag()...');
    this._tagsHistory.unshift(tag);
  }
}
