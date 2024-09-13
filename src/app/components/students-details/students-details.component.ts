import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-students-details',
  standalone: true,
  imports: [HttpClientModule,RouterLink],
  providers:[UsersService],
  templateUrl: './students-details.component.html',
  styleUrl: './students-details.component.css'
})
export class StudentsDetailsComponent implements OnInit{
  ID:any; oneStudent:any;
 constructor(private myService:UsersService,myActivate:ActivatedRoute){ 
  this.ID=myActivate.snapshot.params['id'];
  // console.log(this.ID);
 }
  ngOnInit(): void {
    this.myService.getAllStudentById(this.ID).subscribe({
      next:(data)=>{
       this.oneStudent=data;
      },
      error:()=>{

      }

    }); 
  }
}
