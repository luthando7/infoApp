import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ApiResult {
  value: any[],
  webSearchUrl: string,
  _type: string
}

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  public news!: Object
  public options!: Object
  public url!: string

  constructor(private http: HttpClient) {
    this.url = 'https://bing-news-search1.p.rapidapi.com/news?count=10&setLang=EN&safeSearch=Off&textFormat=Raw';
    const headers = new HttpHeaders()
      .set("X-BingApis-SDK", "true")
      .set("X-RapidAPI-Key", "fd00a6dd37msh949940262d02434p125ceajsn64d686e0a669")
      .set("X-RapidAPI-Host", "bing-news-search1.p.rapidapi.com")
      .set("useQueryString", "true")
    this.options = {
      "method": "GET",
      "hostname": "bing-news-search1.p.rapidapi.com",
      "port": null,
      "path": "/news?count=10&setLang=EN&safeSearch=Off&textFormat=Raw",
      "headers": headers,
    };
  }

  getNews(): Observable<ApiResult> {
    return this.http.get<ApiResult>(this.url, this.options)
  }
}
