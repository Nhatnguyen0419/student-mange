import { Student } from 'src/model/student';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StudentService } from './../student.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student = [];
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }

  add(id: string, UserName: string, Name: string, Email: string, Password: string, CreatedDate: string): void {

    const newStudent: Student = new Student();
    newStudent.id = id;
    newStudent.UserName = UserName;
    newStudent.Name = Name;
    newStudent.Email = Email;
    newStudent.Password = Password;
    newStudent.CreatedDate = CreatedDate;
    console.log(newStudent);
    console.log(this);
    
    
    this.studentService.addNewStudent(newStudent).subscribe(
      insert => {
        console.log(this);
        this.student.push(insert)
        this.goBack();
      }
    );
  }
}
