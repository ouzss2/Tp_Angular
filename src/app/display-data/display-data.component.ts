import { Component, OnInit } from '@angular/core';
import { Student } from '../models/Student';
import { StudentService } from '../Services/student.service';


@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrl: './display-data.component.scss'
})
export class DisplayDataComponent implements OnInit {
  students: Student[] = [];

  constructor(private Service: StudentService) {}

  ngOnInit() {
    this.students = this.Service.getStudents();
  }
}
