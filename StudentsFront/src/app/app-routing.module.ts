import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [ { path: 'about', component: AboutComponent }, { path: 'students', component: StudentsComponent }, { path: '', redirectTo: '/students', pathMatch: 'full' }, { path: 'detail/:id', component: StudentDetailComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
