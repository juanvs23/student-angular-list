import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-average',
  templateUrl: './average.component.html',
  styleUrls: ['./average.component.scss'],
})
export class AverageComponent implements OnInit {
  @Input() average: number = 0;
  @Input() averageColor: string = '';

  constructor() {}

  ngOnInit(): void {}
}
