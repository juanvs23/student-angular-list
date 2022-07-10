import { Student } from './../../../models/student';
import { StudentsService } from './../../../services/students.service';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.scss'],
})
export class StudentsDetailsComponent implements OnInit {
  public id: number = 1;
  public dataStudent: Student = {
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
  public message: string = '';
  public title: string = '';

  constructor(
    private studentService: StudentsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);
    this.getStudentDetails(this.id);
  }
  getStudentDetails(id: number) {
    this.studentService.getStudentDetails(id).subscribe((student) => {
      console.log(student);
      if (student.status === 200) {
        this.dataStudent = student.data[0];
        this.title = this.dataStudent.Name;
        this.message = student.message;
      } else {
        this.title = student.message;
      }
    });
  }
  getGender(gender: string) {
    switch (gender) {
      case '0':
        return 'Female';
        break;

      default:
        return 'Male';
        break;
    }
  }
}
