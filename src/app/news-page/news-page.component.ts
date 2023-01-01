import { Component, OnInit } from '@angular/core';
import { NewsService } from '../api/news.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent implements OnInit {
  public data!: any[];
  public newsData!: Array<string>;

  constructor(private news: NewsService) { }

  ngOnInit() {
    this.news.getNews().subscribe((res) => {
      console.log('the result', res.value);
      this.data = [...res.value]
      console.log('the data....', this.data);
    })
  }

}
