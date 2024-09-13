import { Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { StudentsDetailsComponent } from './components/students-details/students-details.component';
import { ErrorsComponent } from './components/errors/errors.component';

export const routes: Routes = [
    {path:"",component:StudentsComponent}, 
    {path:"students",component:StudentsComponent},
    {path:"students/5",component:StudentsDetailsComponent},
    {path:"**",component:ErrorsComponent},
];
