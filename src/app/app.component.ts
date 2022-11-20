import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'Weather', url: '/folder/Weather', icon: 'mail' },
    { title: 'News', url: '/folder/News', icon: 'heart' },
    { title: 'Sports', url: '/folder/Sports', icon: 'archive' },
    { title: 'Quotes', url: '/folder/Quotes', icon: 'trash' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() { }
}
