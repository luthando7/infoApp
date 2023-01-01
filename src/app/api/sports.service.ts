import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportsService {
  public options!: Object
  public url!: string

  constructor(private http: HttpClient) {
    this.url = 'https://livescore6.p.rapidapi.com/matches/v2/list-live';
    const headers = new HttpHeaders()
    .set('X-RapidAPI-Key', 'fd00a6dd37msh949940262d02434p125ceajsn64d686e0a669')
    .set('X-RapidAPI-Host', 'livescore6.p.rapidapi.com')

    this.options = {
      method: 'GET',
      params: {Category: 'soccer', Timezone: '-7'},
      headers: headers
    };
  }

  getLiveScores() {
    return this.http.get(this.url, this.options)
  }
}
