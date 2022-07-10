import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './pages/students/students.component';
import { StudentsDetailsComponent } from './pages/students-details/students-details.component';
import AppRoutingModule from '../router.module';
import { CardComponent } from './components/card/card.component';
import { AverageComponent } from './components/average/average.component';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentsDetailsComponent,
    CardComponent,
    AverageComponent,
    DetailComponent,
  ],
  imports: [CommonModule, AppRoutingModule, SharedModule],
})
export class StudentsModule {}
