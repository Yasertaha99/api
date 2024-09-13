import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [HttpClientModule,RouterLink],
  providers:[UsersService],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {
  AllStudents:any;
  constructor(private myService:UsersService){
    // console.log( myService.getAllStudents());
  }
  ngOnInit():void { 
    this.myService.getAllStudents().subscribe(
      {next:(data)=>{
        // console.log(data);
       this.AllStudents=data;
      },
    error:(error)=>{ console.log(error);

    }
  })
  }
    }


