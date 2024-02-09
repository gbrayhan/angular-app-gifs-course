import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {ResponseSearchGiphy} from "../interfaces/http/giphy";



@Injectable({providedIn: 'root'})
export class GifsService {

  /*
  * Giphy API
  * Documentation:
  * https://developers.giphy.com/docs/api/#quick-start-guide
  */
  private apiKey: string = 'YOUR_API_KEY';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  private _tagsHistory: string[] = [];

  constructor( private http: HttpClient) {
  }

  private organizeTagsHistory(newTag: string): void {
    if( this._tagsHistory.includes(newTag) ) {
      this._tagsHistory = this._tagsHistory.filter(tag => tag !== newTag);
    }

    this._tagsHistory.unshift(newTag);

    if(this._tagsHistory.length > 10) {
      this._tagsHistory = this._tagsHistory.splice(0, 10);
    }
  }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
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
        console.log(response.data);
    }
    );


  }
}
