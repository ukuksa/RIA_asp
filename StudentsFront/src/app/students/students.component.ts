import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import {StudentService} from '../student.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
 

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
  
})
export class StudentsComponent implements OnInit {

  
   students: Student [];
   getStudents(): void {
    this.studentService.getStudents()
    .subscribe(students => this.students = students);
    }

    create(index: number, firstName: string, lastName: string): void {
      this.studentService.createStudent({ index: index,
      firstName: firstName,
     lastName: lastName } as Student)
      .subscribe(student => { this.students.push(student); });
     }
     
     delete(student: Student): void {
      this.students = this.students.filter(s => s.id !== student.id);
      this.studentService.deleteStudent(student).subscribe();
      }

      constructor(private studentService: StudentService) { }

      

  ngOnInit(): void {
    this.getStudents();
  }
  
  
  

}
