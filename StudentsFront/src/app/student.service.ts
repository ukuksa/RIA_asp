import { Injectable } from '@angular/core';
import {Student} from './student';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
 

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentsApiUrl = 'http://localhost:5000/api/students';

  students: Student[] = []
   
  getStudent(id: number): Observable<Student> {
    const url = `${this.studentsApiUrl}/${id}`;
    return this.http.get<Student>(url);
    }
   

  getStudents(): Observable<Student[]> {
    return (this.http.get<Student[]>(this.studentsApiUrl));
    }

    updateStudent(student: Student): Observable<any> {
      const url = `${this.studentsApiUrl}/${student.id}`;
      return this.http.put(url, student, httpOptions);
      }
      createStudent(student: Student): Observable<Student> {
      return this.http.post<Student>(this.studentsApiUrl, student,
      httpOptions);
      }
      deleteStudent(student: Student | number): Observable<Student> {
      const id = typeof student === 'number' ? student : student.id;
      const url = `${this.studentsApiUrl}/${id}`;
      return this.http.delete<Student>(url, httpOptions);
      }
   
    constructor(private http: HttpClient) { }
    

}


