import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { Student, StudentResponse } from 'src/app/models/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  public students: Student[] | undefined = [];
  public showAll: boolean = false;
  public average: number = 0;
  public averageColor: string = 'red';
  public title: string = '';

  constructor(private studentService: StudentsService) {}

  ngOnInit(): void {
    this.getStudents();
  }
  getStudents() {
    this.studentService
      .getStudentsList()
      .subscribe((students: StudentResponse) => {
        const studentList =
          students.data !== null
            ? students.data?.filter((student) => student.active == true)
            : [];
        this.students = studentList;
        this.title = 'Students List';
        this.getaverage();
      });
  }
  getaverage() {
    if (this.students && this.students?.length > 0) {
      const avegareNumber: number = parseFloat(
        this.students
          .reduce((a, b): number => {
            return a + b.grades;
          }, 0)
          .toFixed(2)
      );
      this.average = avegareNumber / this.students.length;
      if (this.average < 3.0) this.averageColor = 'red';
      if (this.average >= 3.0 && this.average <= 3.9)
        this.averageColor = 'yellow';
      if (this.average >= 4.0) this.averageColor = 'green';
    }
  }

  getShowAll() {}
}
