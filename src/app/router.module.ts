import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/pages/students/students.component';
import { StudentsDetailsComponent } from './students/pages/students-details/students-details.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    pathMatch: 'full',
  },
  {
    path: 'student/:id',
    component: StudentsDetailsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
