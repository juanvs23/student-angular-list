import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'students-frontend';
  ngOnInit(): void {}
  onNewTitle($event: any) {
    console.log($event);
  }
}
