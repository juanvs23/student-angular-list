import { Student } from './../../../models/student';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() student: Student = {
    ID: '1',
    active: true,
    grades: 3.1,
    Name: 'Senpai',
    Gender: '1',
    Class: '32',
    Club: '0',
    Persona: '1',
    Crush: '0',
    BreastSize: '0',
    Strength: '0',
    Hairstyle: '1',
    Color: 'Black',
    Stockings: 'None',
    Accessory: '0',
    ScheduleTime: '7_7_8_13.01_13.375_15.5_99',
    ScheduleDestination: 'Spawn_Locker_Hangout_Seat_LunchSpot_Seat_Hangout',
    ScheduleAction: 'Stand_Stand_Read_Sit_Read_Sit_Read',
  };
  public showGrade = false;
  constructor() {}
  changeShowGrade() {
    this.showGrade = !this.showGrade;
  }
  ngOnInit(): void {}
}
