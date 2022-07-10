import { StudentsService } from './../../../services/students.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title: string = 'Students';

  constructor(private studentsService: StudentsService) {}
}
