import { Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { StudentsDetailsComponent } from './components/students-details/students-details.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';

export const routes: Routes = [
    {path:"",component:StudentsComponent}, 
    {path:"students",component:StudentsComponent},
    {path:"students/:id",component:StudentsDetailsComponent},
    {path:"create",component:CreateStudentComponent},
    {path:"**",component:ErrorsComponent},
];
    