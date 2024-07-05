import { Component } from '@angular/core';
import { StudentService } from '../Services/student.service';
import { Student } from '../models/Student';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrl: './add-data.component.scss'
})
export class AddDataComponent {

  constructor(private Service: StudentService) {}

  addStudent(name: string, description: string, imageurl: string) {
    const newStudent = new Student(name, description, imageurl);
    this.Service.addStudent(newStudent);
    console.log(newStudent)
  }

}
