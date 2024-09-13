import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [HttpClientModule],
  providers:[UsersService],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  constructor(myService:UsersService){
    console.log( myService.getAllStudents());
  }

}
