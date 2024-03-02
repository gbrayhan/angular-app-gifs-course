import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {DataGif, ResponseSearchGiphy} from "../interfaces/http/giphy";


@Injectable({providedIn: 'root'})
export class GifsService {

  /*
  * Giphy API
  * Documentation:
  * https://developers.giphy.com/docs/api/#quick-start-guide
  */
  private apiKey: string = 'apiKeyHere'; // this shoud be o backend
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  private _historyItems: string[] = [];
  private _gifs: DataGif[] = [];

  constructor( private http: HttpClient) {
    this.readLocalStorage();
  }

  private organizeTagsHistory(newTag: string): void {
    if( this._historyItems.includes(newTag) ) {
      this._historyItems = this._historyItems.filter(tag => tag !== newTag);
    }

    this._historyItems.unshift(newTag);

    if(this._historyItems.length > 10) {
      this._historyItems = this._historyItems.splice(0, 10);
    }
    this.saveLocalStorage();
  }

  get historyItems(): string[] {
    return [...this._historyItems];
  }

  get listGifs(): DataGif[] {
    return [...this._gifs];
  }

  public searchTag(tag: string): void {
    if (!tag) {
      return;
    }
    this.organizeTagsHistory(tag)
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', '10');

    this.http.get<ResponseSearchGiphy>(`${this.serviceUrl}/search`, {params})
      .subscribe((response: ResponseSearchGiphy) => {
        this._gifs = response.data;
    });
  }

  public selectHistoryItem(item: string): void {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', item)
      .set('limit', '10');

    debugger;

    this.http.get<ResponseSearchGiphy>(`${this.serviceUrl}/search`, {params})
      .subscribe((response: ResponseSearchGiphy) => {
        this._gifs = response.data;
      });
  }

  saveLocalStorage(): void {
    localStorage.setItem('historyItems', JSON.stringify(this._historyItems));
  }

  readLocalStorage(): void {
    const historyItems = localStorage.getItem('historyItems');
    if(historyItems) {
      this._historyItems = JSON.parse(historyItems);
    }
  }
}
