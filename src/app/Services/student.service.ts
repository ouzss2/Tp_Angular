import { Injectable } from '@angular/core';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = [];

  constructor() {}

  addStudent(newStudent: Student) {
    this.students.push(newStudent);
  }

  getStudents(): Student[] {
    return this.students;
  }
}
